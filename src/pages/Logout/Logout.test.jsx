import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Logout from './Logout.page';

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({
    state: { theme: 'light', authenticated: true, email: 'test@gmail.com' },
    dispatch: () => {},
  }),
  actions: {
    logout: 'logout',
  },
}));
describe('Test rendering Logout page ', () => {
  it('renders Logout page', () => {
    render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Thank you for using Reactbootcamp 2021, return to the app click/i)
    ).toBeInTheDocument();
  });

  it('triggers logout action', () => {
    render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    fireEvent.click(link);
  });
});
