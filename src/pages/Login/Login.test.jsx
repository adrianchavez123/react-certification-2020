import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login.page';

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({ state: { theme: 'light', authenticated: false, email: '' } }),
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
});
