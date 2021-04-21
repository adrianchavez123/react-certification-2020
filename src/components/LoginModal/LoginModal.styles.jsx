import styled from 'styled-components';

const LoginModalBackground = styled.section`
  width: 100vw;
  height: 100vh;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  font-size: 2.5rem;
  margin: 0;
  padding: 0;
  border: 0;
  margin-left: 500px;
`;

export { LoginModalBackground, CloseButton };
