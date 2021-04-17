import React from 'react';
import { render } from '@testing-library/react';
import VideoPlayer from './VideoPlayer.component';

jest.mock('../../state/Video', () => ({
  useVideo: () => ({ state: { search: '', videos: [] }, dispatch: () => {} }),
}));

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({
    state: { favoriteVideos: [] },
    dispatch: () => {},
  }),
}));

describe('Test VideoPlayer is in the screen', () => {
  it('renders the video player', () => {
    render(<VideoPlayer videoId="HYyRZiwBWc8" />);
  });
});
