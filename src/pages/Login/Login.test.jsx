import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login.page';

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({ state: { theme: 'light', authenticated: false, email: '' } }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    goBack: jest.fn().mockImplementation(() => ({
      history: {
        goBack: () => {},
      },
    })),
  }),
}));

describe('Test rendering login page ', () => {
  it('renders login page', () => {
    render(<Login />);
    expect(screen.getByText('Welcome back!')).toBeInTheDocument();

    const heading = screen.getByRole('heading', {
      name: /Welcome back!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('displays login form', () => {
    render(<Login />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText('username')).toBeInTheDocument();

    expect(screen.getByLabelText('password')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has right styles and classes', () => {
    render(<Login />);
    expect(screen.getByTestId('login-form')).toHaveClass('login-page');
  });

  it('logins with wrong credentials', async () => {
    render(<Login />);
    userEvent.type(screen.getByLabelText('username'), 'test@gmail.com');
    userEvent.type(screen.getByLabelText('password'), '12345');
    userEvent.click(screen.getByRole('button', { name: /login/ }));
    expect(await screen.findByText(/You are not a member/i)).toBeInTheDocument();
  });

  it('logins with correct credentials', async () => {
    render(<Login />);
    userEvent.type(screen.getByLabelText('username'), 'wizeline');
    userEvent.type(screen.getByLabelText('password'), 'Rocks!');
    userEvent.click(screen.getByRole('button', { name: /login/ }));
  });
});
