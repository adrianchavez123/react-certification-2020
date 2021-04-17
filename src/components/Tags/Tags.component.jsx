import React from 'react';
import { Tag, TagContainer } from './Tags.styles';

function Tags({ labels }) {
  return (
    <TagContainer>
      {labels
        ? labels.map((tag) => (
            <Tag key={tag} data-testid="tag">
              {tag}
            </Tag>
          ))
        : null}
    </TagContainer>
  );
}

export default Tags;
