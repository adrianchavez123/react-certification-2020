import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Test the menu', () => {
  it("renders menu's title", () => {
    render(<Header />);
    expect(screen.getByText('reactbootcamp 2021')).toBeInTheDocument();
  });
});
