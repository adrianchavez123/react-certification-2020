import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PrivateAsideMenu from './PrivateAsideMenu.component';

describe('Test aside menu ', () => {
  it('renders the aside menu in the app', () => {
    render(
      <MemoryRouter>
        <PrivateAsideMenu />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });
});
