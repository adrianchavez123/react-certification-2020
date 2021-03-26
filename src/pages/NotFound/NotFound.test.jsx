import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import NotFound from './NotFound.page';

describe('Test rendering login page ', () => {
  it('renders login page', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
