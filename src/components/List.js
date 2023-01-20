import styled from 'styled-components';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const List = () => {
  const { list, clearItems, deleteItem, editItem } = useGlobalContext();

  return (
    <Wrapper>
      {list.map((item) => {
        const { title, price, id } = item;

        return (
          <div className="singleList-container" key={id}>
            <div className="title">
              <h3>{title}</h3>
              <h3>${price}</h3>
            </div>
            <aside>
              <div className="edit-btn" onClick={() => editItem(id)}>
                <AiFillEdit />
              </div>
              <div className="delete-btn" onClick={(e) => deleteItem(id)}>
                <AiTwotoneDelete />
              </div>
            </aside>
          </div>
        );
      })}
      <div className="clear-btn">
        <button type="button" onClick={clearItems}>
          Clear Item(s)
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  background: #fff;
  margin: 30px auto;
  padding: 20px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  .singleList-container {
    display: flex;
    justify-content: space-between;
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    h3 {
      width: 50%;
      text-transform: capitalize;
      color: var(--header);
    }
  }
  aside {
    position: relative;
    top: 5px;
    display: flex;
    gap: 10px;
    color: var(--title-bg);
    .edit-btn,
    .delete-btn {
      cursor: pointer;
      font-size: 20px;
    }
  }
  .clear-btn {
    text-align: center;
    margin-top: 20px;
    button {
      cursor: pointer;
      display: inline-block;
      font-size: 16px;
      outline: none;
      background: none;
      border: none;
      letter-spacing: 1px;
      color: var(--success);
      transition: 0.3s ease-out;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;

export default List;
