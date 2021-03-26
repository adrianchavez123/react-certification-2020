import React from 'react';
import ReactDOM from 'react-dom';
import youtubeMockVideos from '../../mocks/youtube-videos-mock.json';
import YoutubeCards from './YoutubeCards';

describe('All the mockup videos are renders as cards', () => {
  test('it should return the total of mockup videos', () => {
    const { items } = youtubeMockVideos;
    expect(items.length === 25).toBe(true);
  });

  test("Render cards' container", () => {
    const div = document.createElement('div');
    ReactDOM.render(<YoutubeCards />, div);
  });
});
