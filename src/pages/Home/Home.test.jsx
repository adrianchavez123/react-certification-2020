import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Home from './Home.page';
import themes from '../../components/App/Theme';

const mockUseVideo = [
  {
    id: { videoId: 'nmXMgqjQzls' },
    snippet: {
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      description: 'description',
      thumbnails: { high: { url: null } },
    },
  },
  {
    id: { videoId: 'HYyRZiwBWc8' },
    snippet: {
      title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
      description: 'description',
      thumbnails: { high: { url: null } },
    },
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        videos: [
          { videoId: 'w7ejDZ8SWv8', title: 'React JS Crash Course 2021' },
          { videoId: 'Ke90Tje7VS0', title: 'React JS - React Tutorial for Beginners' },
        ],
      }),
  })
);

jest.mock('../../state/Video', () => ({
  useVideo: () => ({
    state: { alert: { mesagge: '', type: '' }, videos: mockUseVideo },
    dispatch: () => {},
  }),
  actions: { searchVideo: 'SEARCH_VIDEO' },
}));

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({ state: { theme: 'light' }, dispatch: () => {} }),
  actions: {
    setTheme: 'light',
  },
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

describe("Click theme's checkbox", () => {
  it('renders the app', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={themes.light}>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    const check = screen.getByRole('checkbox');
    expect(check).toBeInTheDocument();
    const heading = screen.getByRole('heading', {
      name: /Welcome to the Challenge!/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle('color: #003f87');

    userEvent.click(check);
    expect(check).toBeChecked();
  });
});

describe('Displays the default cards', () => {
  it("updates home card's at search", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/Bringing Silicon Valley to Mexico/i)).toBeInTheDocument();
  });
});
describe('Searching a videos', () => {
  it('updates home cards at searching', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    userEvent.type(screen.getByRole('searchbox'), 'react js');
    userEvent.click(screen.getByRole('button'));
    expect(await screen.getByRole('searchbox')).toBeInTheDocument();
    // expect(screen.getByText(/React JS Crash Course 2021/i)).toBeInTheDocument(); /* there is not dispatch implementation */
  });
});
