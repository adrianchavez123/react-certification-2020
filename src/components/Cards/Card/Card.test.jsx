import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';
import youtubeMockVideos from '../../../mocks/youtube-videos-mock.json';

describe('Test a single card', () => {
  test('Render a card', () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
  });

  test('First card is well rendered', () => {
    const { title, description } = youtubeMockVideos.items[1].snippet;
    render(
      <MemoryRouter>
        <Card title={title} description={description} />
      </MemoryRouter>
    );

    screen.getByText(title);
    screen.getByText(description);
  });
});
