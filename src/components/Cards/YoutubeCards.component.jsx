import React from 'react';
import Card from './Card';
import Group from './YoutubeCards.styles';
import { useVideo } from '../../providers/Video';

function YoutubeCards() {
  const { videos } = useVideo();

  return (
    <Group>
      {videos
        .filter((item) => item.id?.videoId)
        .map((item) => (
          <Card
            videoId={item.id.videoId}
            key={item.id.videoId}
            title={item.snippet.title}
            description={item.snippet.description}
            image={item.snippet.thumbnails.high.url}
          />
        ))}
    </Group>
  );
}

export default YoutubeCards;
