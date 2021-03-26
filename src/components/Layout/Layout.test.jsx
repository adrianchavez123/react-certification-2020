import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

describe('Test render layout component ', () => {
  it('renders layout component', () => {
    render(<Layout />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
