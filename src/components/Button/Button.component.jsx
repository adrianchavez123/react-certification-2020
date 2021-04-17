import React from 'react';
import { StyledButton } from './Button.styles';

function Button({ children }) {
  return <StyledButton type="button">{children}</StyledButton>;
}

export default Button;
