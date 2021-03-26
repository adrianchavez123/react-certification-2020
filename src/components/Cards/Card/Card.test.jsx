import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import youtubeMockVideos from '../../../mocks/youtube-videos-mock.json';

describe('Test a single card', () => {
  test('Render a card', () => {
    render(<Card />);
  });

  test('First card is well rendered', () => {
    const { title, description } = youtubeMockVideos.items[1].snippet;
    render(<Card title={title} description={description} />);

    screen.getByText(title);
    screen.getByText(description);
  });
});
