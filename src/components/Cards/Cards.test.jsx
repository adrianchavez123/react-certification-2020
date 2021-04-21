import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import youtubeMockVideos from '../../mocks/youtube-videos-mock.json';
import Cards from './Cards.component';

const mockUseVideo = [
  {
    id: { videoId: 'Po3VwR_NNGk' },
    snippet: {
      title: 'Video title1',
      description: 'description',
      thumbnails: { high: { url: null } },
    },
  },
  {
    id: { videoId: 'Po2VwR_NNGk' },
    snippet: {
      title: 'Video title2',
      description: 'description',
      thumbnails: { high: { url: null } },
    },
  },
];

jest.mock('../../state/Video', () => ({
  useVideo: () => ({ state: { videos: mockUseVideo } }),
}));

describe('All the mockup videos are renders as cards', () => {
  test('it should return the total of mockup videos', () => {
    const { items } = youtubeMockVideos;
    expect(items.length === 25).toBe(true);
  });

  test("Render cards' container", () => {
    render(
      <MemoryRouter>
        <Cards />
      </MemoryRouter>
    );
  });

  test("Render cards' container with children", () => {
    render(
      <MemoryRouter>
        <Cards />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link').length).toBe(2);
    expect(screen.getByText(/Video title1/i)).toBeInTheDocument();
  });
});
