import React from 'react';
import styled from 'styled-components';

const CheckBox = styled.div`
  display: flex;
  padding: 0 20px;
`;

function CheckBoxSwitch({ children }) {
  return (
    <CheckBox>
      {children}
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </CheckBox>
  );
}

export default CheckBoxSwitch;
