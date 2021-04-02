import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Search, SearchContainer, Label } from './SearchingBar.styles';
import { useVideo } from '../../../providers/Video';

function SearchingBar() {
  const { search, setSearch, setVideos, setAlert } = useVideo();
  const history = useHistory();
  const { videoId } = useParams();

  const searchVideos = async (e) => {
    e.preventDefault();
    if (!search) {
      setAlert({
        type: 'success',
        message: 'Please write something in the searchbox first. :)',
      });
      return;
    }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_YOUTUBE_DATA_SEARCH_ENDPOINT}${search}&key=${process.env.REACT_APP_YOUTUBE_DATA_KEY}`
      );
      const data = await response.json();
      if (data?.items) {
        const { items: videos } = data;
        setVideos(videos);
        if (videoId) {
          history.push('/');
        }
      } else if (data?.error) {
        throw new Error(data.error.message);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setAlert({ type: 'danger', message: error.message });
    } finally {
      setSearch('');
    }
  };

  return (
    <SearchContainer>
      <form onSubmit={searchVideos}>
        <Label>
          <Search
            type="search"
            value={search}
            placeholder="Search a video"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button name="search" type="submit" className="search-button" title="search">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </Label>
      </form>
    </SearchContainer>
  );
}

export default SearchingBar;
