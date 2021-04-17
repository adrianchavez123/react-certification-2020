import styled from 'styled-components';

const Alert = styled.div`
  width: 80vw;
  height: 10vh;
  background-color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 5px;
  position: absolute;
  top: 16vh;
  right: 10vw;
  z-index: 10;
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  position: absolute;
  top: 10%;
  right: 10px;
`;

const Span = styled.span`
  margin-left: 40px;
`;

Alert.defaultProps = {
  theme: { color: '#f8d7da', border: '#721c24' },
};

export { Alert, CloseButton, Span };
