import React from 'react';
import { NotFoundSection, HomeLink, BigTitle, Title, Text } from './NotFound.styles';

function NotFoundPage() {
  return (
    <NotFoundSection>
      <HomeLink to="/" className="home-link">
        home
      </HomeLink>
      <BigTitle>404</BigTitle>
      <Title>Not Found</Title>
      <Text>The resource requested could not be found on this sever!</Text>
    </NotFoundSection>
  );
}

export default NotFoundPage;
