import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react';
import Preferences from './Preferences.component';

jest.mock('../../../state/User', () => ({
  useUserAccount: () => ({
    state: { theme: 'light', authenticated: false, email: '' },
    dispatch: () => {},
  }),
  actions: { openLoginModal: 'OPEN_MODAL' },
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '',
  }),
}));

describe('Test preferences dropdown menu ', () => {
  it("renders application's name", () => {
    render(
      <MemoryRouter>
        <Preferences />
      </MemoryRouter>
    );
    expect(screen.getByTestId('preferences-dropdown')).toBeInTheDocument();
    expect(screen.getByTestId('preferences-dropdown')).toHaveClass('dropdown-content');
  });

  it('renders the dropdown menu', () => {
    render(
      <MemoryRouter>
        <Preferences />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('preferences-icon'));
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('shows the menu', () => {
    render(
      <MemoryRouter>
        <Preferences />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId('preferences-icon'));
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByTestId('preferences-dropdown')).toHaveClass(
      'dropdown-content show'
    );
  });
});
