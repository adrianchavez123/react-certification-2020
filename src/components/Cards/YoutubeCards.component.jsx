import React from 'react';
import Card from './Card';
import Group from './YoutubeCards.styles';
import youtubeMockVideos from '../../mocks/youtube-videos-mock.json';

function YoutubeCards() {
  const { items } = youtubeMockVideos;
  return (
    <Group>
      {items.map((item) => (
        <Card
          key={item.etag}
          title={item.snippet.title}
          description={item.snippet.description}
          image={item.snippet.thumbnails.high.url}
        />
      ))}
    </Group>
  );
}

export default YoutubeCards;
