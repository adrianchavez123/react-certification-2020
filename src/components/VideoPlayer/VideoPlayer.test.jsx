import React from 'react';
import { render } from '@testing-library/react';
import VideoPlayer from './VideoPlayer.component';

describe('Test VideoPlayer is in the screen', () => {
  it('renders the video player', () => {
    render(<VideoPlayer videoId="HYyRZiwBWc8" />);
  });
});
