import React from 'react';
import { render, screen } from '@testing-library/react';
import Preferences from './Preferences';

describe('Test preferences dropdown menu ', () => {
  it("renders application's name", () => {
    render(<Preferences />);
  });

  it('renders dark mode checkbox component', () => {
    render(<Preferences />);
    const check = screen.getByRole('checkbox');

    expect(check).toBeInTheDocument();
    expect(screen.getByText(/Dark mode/i)).toBeInTheDocument();
  });
});
