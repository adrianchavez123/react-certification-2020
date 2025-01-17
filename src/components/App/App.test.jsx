import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({ state: { theme: 'light' } }),
}));

describe('Test the app can be loaded', () => {
  it('renders the app', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();

    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();

    expect(screen.getByText(/REACTBOOTCAMP 2021/i)).toBeInTheDocument();

    const heading = screen.getByRole('heading', {
      name: /Welcome to the Challenge!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
