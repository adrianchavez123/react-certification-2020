import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBoxSwitch from './CheckBoxSwitch.component';

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({ state: { theme: 'light', authenticated: false, email: '' } }),
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
});
