import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchingBar from './SearchingBar.component';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ videos: [{ videoId: 'efgtf' }, { videoId: 'efwsdrs' }] }),
  })
);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    videoId: 'HYyRZiwBWc8',
  }),
}));

jest.mock('../../../state/Video', () => ({
  useVideo: () => ({ state: { search: '' }, dispatch: () => {} }),
  actions: {
    displayError: () => {},
  },
}));

describe('Test the searching bar is displayed', () => {
  it('renders the searching videos component', () => {
    render(<SearchingBar />);
  });

  it('renders the input field', () => {
    render(<SearchingBar />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'search' })).toBeInTheDocument();
  });

  it('clicks are search', async () => {
    render(<SearchingBar />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
  });

  it('searches a video', async () => {
    render(<SearchingBar />);
    userEvent.type(screen.getByRole('searchbox'), 'wizeline');
    userEvent.click(screen.getByRole('button'));
    expect(await screen.getByRole('searchbox', '')).toBeInTheDocument();
  });
});
