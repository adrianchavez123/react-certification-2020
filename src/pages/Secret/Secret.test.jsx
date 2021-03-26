import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Secret from './Secret.page';

describe('Test rendering login page ', () => {
  it('renders login page', () => {
    render(
      <BrowserRouter>
        <Secret />
      </BrowserRouter>
    );
    expect(screen.getByText(/welcome, voyager.../i)).toBeInTheDocument();
  });
});
