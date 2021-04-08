import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    videoId: 'HYyRZiwBWc8',
  }),
}));

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({ state: { theme: 'light' } }),
}));

jest.mock('../../state/Video', () => ({
  useVideo: () => ({ state: { search: '' } }),
}));

describe("Test  header's menu ", () => {
  it("renders application's name", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('reactbootcamp 2021')).toBeInTheDocument();
  });

  it("renders application's searchingbar component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it("renders application's preferences component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId('preferences')).toBeInTheDocument();
  });
});
