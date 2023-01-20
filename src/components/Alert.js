import { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Alert = ({ type, msg }) => {
  const { showAlert, list } = useGlobalContext();

  const removeAlert = () => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  };

  useEffect(() => {
    removeAlert();
    // eslint-disable-next-line
  }, [list]);

  return (
    <Wrapper>
      <div className={`alert ${type}`}>{msg}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  .alert {
    text-align: center;
    color: #fff;
    text-transform: capitalize;
    padding: 5px;
  }
  .alert.success {
    background: var(--success);
  }
  .alert.danger {
    background: var(--danger);
  }
`;

export default Alert;
