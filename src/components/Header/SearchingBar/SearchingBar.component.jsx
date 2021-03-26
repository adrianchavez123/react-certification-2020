import React from 'react';
import { Search, SearchContainer } from './SearchingBar.styles';

function SearchingBar() {
  return (
    <SearchContainer>
      <Search type="text" placeholder="Search a video" />
    </SearchContainer>
  );
}

export default SearchingBar;
