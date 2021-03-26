import React from 'react';
import { render, screen } from '@testing-library/react';
import Fortune from './Fortune.component';

describe('Test Fortune component is well rendered', () => {
  it('renders the checkbox', () => {
    render(<Fortune />);
    const check = screen.getByTestId('fortune');

    expect(check).toBeInTheDocument();
  });
});
