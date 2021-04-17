import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import themes from '../App/Theme';
import CheckBoxSwitch from './CheckBoxSwitch.component';

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({
    state: { theme: 'dark', authenticated: false, email: '' },
    dispatch: () => {},
  }),
  actions: {
    setTheme: 'light',
  },
}));

describe('Test checkboxswitch is well rendered', () => {
  it('renders the checkbox', () => {
    render(<CheckBoxSwitch />);
    const check = screen.getByRole('checkbox');

    expect(check).toBeInTheDocument();
  });

  it('renders the checkbox with the Dark mode label', () => {
    render(<CheckBoxSwitch>Dark mode</CheckBoxSwitch>);
    const check = screen.getByRole('checkbox');

    expect(check).toBeInTheDocument();

    expect(screen.getByText(/Dark mode/i)).toBeInTheDocument();
  });

  it('turns on the dark mode', () => {
    render(<CheckBoxSwitch>Dark mode</CheckBoxSwitch>);
    const check = screen.getByRole('checkbox');
    fireEvent.click(check);
    expect(check).toBeInTheDocument();

    expect(check).toBeChecked();
  });
  it('displays the checkbok selected when dark mode is active', () => {
    render(
      <ThemeProvider theme={themes.dark}>
        <CheckBoxSwitch>Dark mode</CheckBoxSwitch>
      </ThemeProvider>
    );
    const check = screen.getByRole('checkbox');
    expect(check).toBeInTheDocument();
    expect(check).toBeChecked();
  });
});
