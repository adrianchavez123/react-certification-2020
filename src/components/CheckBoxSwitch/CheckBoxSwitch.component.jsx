import React, { useState, useEffect } from 'react';
import { CheckBox } from './CheckBoxSwitch.styles';
import { useUserAccount, actions } from '../../state/User';

function CheckBoxSwitch({ children }) {
  const [checked, setChecked] = useState(false);
  const { state, dispatch } = useUserAccount();
  const { theme } = state;
  const changeTheme = () => {
    setChecked(!checked);
    dispatch({
      type: actions.setTheme,
      payload: {
        theme: theme === 'light' ? 'dark' : 'light',
      },
    });
  };

  useEffect(() => {
    if (theme === 'dark') {
      setChecked(true);
    }
  }, [theme, checked]);

  return (
    <CheckBox>
      {children}
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={changeTheme} />
        <span className="slider round" />
      </label>
    </CheckBox>
  );
}

export default CheckBoxSwitch;
