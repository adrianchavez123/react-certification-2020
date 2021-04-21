import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginModal from './LoginModal.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    history: { goBack: () => {} },
  }),
}));

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({
    state: { closeModal: false },
    actions: { closeLoginModal: 'CLOSE_LOGIN_MODAL' },
  }),
}));

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node) => node,
  };
});

describe('Test  LoginModal on the page', () => {
  it('renders the modal on the page', () => {
    render(<LoginModal />);
    expect(screen.getByText('Welcome back!')).toBeInTheDocument();
  });

  it('renders the login form', () => {
    render(<LoginModal />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText('username')).toBeInTheDocument();

    expect(screen.getByLabelText('password')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
