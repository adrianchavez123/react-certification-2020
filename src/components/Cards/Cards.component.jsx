import React from 'react';
import Card from './Card';
import Group from './Cards.styles';
import { useVideo } from '../../state/Video';

function YoutubeCards() {
  const { state } = useVideo();
  const { videos } = state;
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
