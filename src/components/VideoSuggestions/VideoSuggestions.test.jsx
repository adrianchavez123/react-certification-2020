import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VideoSuggestions from './VideoSuggestions.component';

const mockedVideos = [
  {
    id: { videoId: 'Po3VwR_NNGk' },
    snippet: {
      title: 'Video title',
      description: 'description',
      thumbnails: { default: { url: null } },
    },
  },
  {
    id: { videoId: 'Po2VwR_NNGk' },
    snippet: {
      title: 'Video title',
      description: 'description',
      thumbnails: { default: { url: null } },
    },
  },
];

jest.mock('../../state/Video', () => ({
  useVideo: () => ({ state: { videos: mockedVideos } }),
}));
describe('Test Video suggestions is in the page ', () => {
  it('renders the component', () => {
    render(
      <MemoryRouter>
        <VideoSuggestions />
      </MemoryRouter>
    );
    expect(screen.getByTestId('video-suggestions')).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBe(2);
  });
  it('renders the component with props, exclude current video', () => {
    render(
      <MemoryRouter>
        <VideoSuggestions videoId="Po3VwR_NNGk" />
      </MemoryRouter>
    );
    expect(screen.getByTestId('video-suggestions')).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBe(1);
  });
});
