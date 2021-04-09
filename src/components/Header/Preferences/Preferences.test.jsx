import React from 'react';
import { getByText, render, screen, fireEvent } from '@testing-library/react';
import Preferences from './Preferences.component';

jest.mock('../../../state/User', () => ({
  useUserAccount: () => ({
    state: { theme: 'light', authenticated: false, email: '' },
    dispatch: () => {},
  }),
}));

describe('Test preferences dropdown menu ', () => {
  it("renders application's name", () => {
    render(<Preferences />);
    expect(screen.getByTestId('preferences-dropdown')).toBeInTheDocument();
    expect(screen.getByTestId('preferences-dropdown')).toHaveClass('dropdown-content');
  });

  it('renders the dropdown menu', () => {
    render(<Preferences />);
    fireEvent.click(screen.getByTestId('preferences-icon'));
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('shows the menu', () => {
    render(<Preferences />);
    fireEvent.click(screen.getByTestId('preferences-icon'));
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByTestId('preferences-dropdown')).toHaveClass(
      'dropdown-content show'
    );
  });
});
