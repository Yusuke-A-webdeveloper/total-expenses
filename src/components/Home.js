import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Alert from './Alert';
import List from './List';
import Total from './Total';

const Home = () => {
  const {
    alert,
    price,
    name,
    setName,
    setPrice,
    handleSubmit,
    list,
    isEditing,
  } = useGlobalContext();

  return (
    <Wrapper>
      <header>
        <h1>total expenses</h1>
      </header>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <div className="input-con">
          <input
            type="text"
            name="name"
            placeholder="e.g. tomatos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-con">
          <input
            type="text"
            name="price"
            placeholder="please enter numbers"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="btn-con">
          <button type="submit">{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 && <List />}
      <Total />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 40px);
  header {
    position: relative;
    width: 100%;
    background: var(--title-bg);
    text-align: center;
    h1 {
      font-size: 35px;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  form {
    position: relative;
    width: 100%;
    background: #fff;
    margin: 30px auto;
    padding: 20px;
    max-width: 500px;
    .input-con {
      width: 100%;
      margin-bottom: 20px;
      input {
        width: 100%;
        font-size: 18px;
        padding: 5px 10px;
      }
    }
    .btn-con {
      text-align: center;
      button {
        display: inline-block;
        font-size: 15px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 4px 8px;
        color: #fff;
        background: var(--title-bg);
        border: none;
        cursor: pointer;
        transition: 0.3s ease-out;
        :hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

export default Home;
