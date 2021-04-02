import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login.page';
import AuthProvider from '../../providers/Auth';

describe('Test rendering login page ', () => {
  it('renders login page', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    expect(screen.getByText('Welcome back!')).toBeInTheDocument();

    const heading = screen.getByRole('heading', {
      name: /Welcome back!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('displays login form', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText('username')).toBeInTheDocument();

    expect(screen.getByLabelText('password')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
