import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';
import youtubeMockVideos from '../../../mocks/youtube-videos-mock.json';

describe('Test a single card', () => {
  test('Render a card', () => {
    render(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    );
  });

  test('First card is well rendered', () => {
    const { title, description } = youtubeMockVideos.items[1].snippet;
    render(
      <BrowserRouter>
        <Card title={title} description={description} />
      </BrowserRouter>
    );

    screen.getByText(title);
    screen.getByText(description);
  });
});
