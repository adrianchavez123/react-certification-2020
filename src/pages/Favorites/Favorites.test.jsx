import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Favorites from './Favorites.page';

jest.mock('../../state/Video', () => ({
  useVideo: () => ({ state: { alert: { mesagge: '', type: '' }, videos: [] } }),
}));

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({
    state: { favoriteVideos: [], authenticated: true, showMenu: true },
    dispatch: () => {},
  }),
}));

describe('Favorites page is loaded', () => {
  it('renders the app', () => {
    render(
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>
    );

    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();
    expect(screen.getByText(/REACTBOOTCAMP 2021/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark mode/i)).toBeInTheDocument();
  });

  it("displays favorite's videos title", () => {
    render(
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: /Favorite videos!/i })
    ).toBeInTheDocument();
  });
});
