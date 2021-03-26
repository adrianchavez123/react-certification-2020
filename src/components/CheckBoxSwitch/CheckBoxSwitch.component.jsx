import React from 'react';
import { CheckBox } from './CheckBoxSwitch.styles';

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
