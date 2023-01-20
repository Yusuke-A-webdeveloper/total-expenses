import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Copy right {new Date().getFullYear()} JPENwebdeveloper. All Right
        Reserved
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  background: var(--title-bg);
  p {
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 10px;
  }
`;

export default Footer;
