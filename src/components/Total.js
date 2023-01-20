import styled from 'styled-components';
import { RiMoneyCnyBoxFill } from 'react-icons/ri';
import { useGlobalContext } from '../context';

const Total = () => {
  const { total } = useGlobalContext();
  // make price to integer, allow only 2 number after dicimal
  const newTotal = parseFloat(total).toFixed(2);

  return (
    <Wrapper>
      <div className="content">
        <div className="icon">
          <RiMoneyCnyBoxFill />
        </div>
        <h2>Total</h2>
      </div>
      <h3 className="total">$ {newTotal}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  margin: 30px auto;
  padding: 20px;
  max-width: 500px;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      color: var(--title-bg);
      svg {
        font-size: 25px;
        margin: 10px 10px 0;
      }
    }
    h2 {
      font-size: 30px;
      letter-spacing: 2px;
      color: var(--header);
    }
  }
  h3 {
    width: 100%;
    color: var(--header);
    text-align: center;
    font-size: 45px;
  }
`;

export default Total;
