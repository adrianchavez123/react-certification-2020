import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import VideoList from './VideoList.component';

const mockUseVideo = [
  {
    videoId: 'Po3VwR_NNGk',
    title: 'Video title',
    description: 'description',
    url: null,
  },
  {
    videoId: 'Po3VwR_NNGl',
    title: 'Video title',
    description: 'description',
    url: null,
  },
];

describe('VideoList component', () => {
  it('renders videoList component', () => {
    render(
      <MemoryRouter>
        <VideoList videos={mockUseVideo} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('heading').length).toBe(2);
    expect(screen.getAllByRole('link').length).toBe(2);
  });
});
