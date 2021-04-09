import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from './Home.page';

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({ state: { theme: 'light' } }),
}));
jest.mock('../../state/Video', () => ({
  useVideo: () => ({ state: { alert: { mesagge: '', type: '' }, videos: [] } }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    videoId: 'frt5fdds',
  }),
}));

describe('Home page is loaded', () => {
  it('renders the app', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();
    expect(screen.getByText(/REACTBOOTCAMP 2021/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark mode/i)).toBeInTheDocument();
  });
});
