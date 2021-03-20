import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

it('renders the app', () => {
  render(<App />);
  expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
});
