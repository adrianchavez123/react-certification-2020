import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import VideoProvider from '../../state/Video';
import Routes from './Routes.component';

jest.mock('../../state/Video', () => ({
  useVideo: () => ({ state: { alert: { mesagge: '', type: '' }, videos: [] } }),
}));

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({
    state: {
      favoriteVideos: [{ videoId: 'w7ejDZ8SWv8', title: 'React JS Crash Course 2021' }],
      authenticated: true,
      showMenu: true,
    },
    dispatch: () => {},
  }),
  actions: { logout: 'LOGOUT' },
}));

describe("App's routes", () => {
  const createRouter = (initialEntry = '/') => {
    return (
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes />
      </MemoryRouter>
    );
  };
  it("should render favorites's  page", () => {
    render(createRouter('/favorites'));
    expect(
      screen.queryByRole('heading', { name: /Favorite videos!/i })
    ).toBeInTheDocument();
  });
  it("should render favorites's  page", () => {
    render(createRouter('/'));
    expect(screen.queryByRole('heading', { name: /Favorite videos!/i })).toBeNull();
    const heading = screen.getByRole('heading', {
      name: /Welcome to the Challenge!/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render logout page', () => {
    render(createRouter('/logout'));
    expect(screen.queryByRole('heading', { name: /Favorite videos!/i })).toBeNull();
    expect(
      screen.queryByRole('heading', { name: /Welcome to the Challenge!/i })
    ).toBeNull();
    const heading = screen.getByRole('heading', {
      name: /Thank you for using Reactbootcamp 2021,/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render logout page', () => {
    render(createRouter('/login'));
    expect(screen.queryByRole('heading', { name: /Favorite videos!/i })).toBeNull();
  });
  it('should render 404 page', () => {
    render(createRouter('/lfdsdfdf/sgfdgfdgdfg'));
    expect(screen.queryByRole('heading', { name: /Favorite videos!/i })).toBeNull();
    expect(screen.getByText('Not Found')).toBeInTheDocument();
    expect(
      screen.getByText('The resource requested could not be found on this sever!')
    ).toBeInTheDocument();
  });
});
