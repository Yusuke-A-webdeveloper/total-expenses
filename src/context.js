import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

const getListFromLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState(0);
  const [list, setList] = useState(getListFromLocalStorage());
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      showAlert(true, 'danger', 'all fields are required');
    } else if (name && price && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name, price: price };
          }
          return item;
        })
      );
      setName('');
      setPrice('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'edit one item');
    } else if (name && price) {
      showAlert(true, 'success', 'one item created');

      const newList = {
        id: new Date().getTime().toString(),
        title: name,
        price,
      };
      setList([...list, newList]);
      setTotal(sumupPrice());
      setName('');
      setPrice('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const sumupPrice = () => {
    const expensesTotal = list.reduce((acc, cur) => {
      const { price } = cur;
      // make price to integer
      const newPrice = parseFloat(price);
      acc += newPrice;
      return acc;
    }, 0);
    return expensesTotal;
  };

  const clearItems = () => {
    showAlert(true, 'danger', 'clear all items');
    setList([]);
    setEditID(null);
    setIsEditing(false);
    setTotal(0);
  };

  const deleteItem = (id) => {
    const newItem = list.filter((item) => item.id !== id);
    showAlert(true, 'danger', 'delete one item');
    setList(newItem);
  };

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    const { title: editTitle, price: editPrice } = editItem;
    setIsEditing(true);
    setEditID(id);
    setName(editTitle);
    setPrice(editPrice);
  };

  useEffect(() => {
    setTotal(sumupPrice());
    // eslint-disable-next-line
  }, [price, list]);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    // eslint-disable-next-line
  }, [list]);

  return (
    <AppContext.Provider
      value={{
        alert,
        total,
        list,
        editID,
        isEditing,
        price,
        name,
        setName,
        setPrice,
        handleSubmit,
        showAlert,
        clearItems,
        deleteItem,
        editItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
