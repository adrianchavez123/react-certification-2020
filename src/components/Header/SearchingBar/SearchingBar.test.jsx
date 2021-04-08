import React from 'react';
import { render, screen } from '@testing-library/react';
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

  it('triggers change on click button', () => {});
});
