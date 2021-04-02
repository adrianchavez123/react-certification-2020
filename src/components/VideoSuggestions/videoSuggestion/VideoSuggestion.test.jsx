import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import VideoSuggestion from './VideoSuggestion.component';
import youtubeMockVideos from '../../../mocks/youtube-videos-mock.json';

describe('Test a suggested video', () => {
  test('Render a video', () => {
    render(
      <BrowserRouter>
        <VideoSuggestion />
      </BrowserRouter>
    );
  });

  test('Display the first suggestion', () => {
    const { title, publishedAt } = youtubeMockVideos.items[1].snippet;
    const { url } = youtubeMockVideos.items[2].snippet.thumbnails.default;
    render(
      <BrowserRouter>
        <VideoSuggestion title={title} publishedAt={publishedAt} image={url} />
      </BrowserRouter>
    );

    screen.getByText(title);
  });
});
