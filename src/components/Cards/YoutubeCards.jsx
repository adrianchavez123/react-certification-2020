import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import youtubeMockVideos from '../../mocks/youtube-videos-mock.json';

const Group = styled.section`
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0;
  margin: 0 10%;
  padding: 2% 0;
`;
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
