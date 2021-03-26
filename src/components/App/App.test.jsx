import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('Test the app can be loaded', () => {
  it('renders the app', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();

    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /REACTBOOTCAMP 2021/i })).toBeInTheDocument();

    const heading = screen.getByRole('heading', {
      name: /Welcome to the Challenge!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
