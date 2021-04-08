import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Search, SearchContainer, Label, SearchingButton } from './SearchingBar.styles';
import { useVideo, actions } from '../../../state/Video';

function SearchingBar() {
  const { state, dispatch } = useVideo();
  const { search } = state;
  const history = useHistory();
  const { videoId } = useParams();

  const searchVideos = async (e) => {
    e.preventDefault();
    if (!search) {
      dispatch({
        type: actions.displayError,
        payload: {
          type: 'success',
          message: 'Please write something in the searchbox first. :)',
        },
      });
      return;
    }
    try {
      dispatch({
        type: actions.closeDialog,
        payload: {},
      });
      const response = await fetch(
        `${process.env.REACT_APP_YOUTUBE_SEARCH_ENDPOINT}${search}&key=${process.env.REACT_APP_YOUTUBE_DATA_KEY}`
      );
      const data = await response.json();
      if (data?.items) {
        const { items: videos } = data;
        dispatch({
          type: actions.videoList,
          payload: { videos },
        });
        if (videoId) {
          history.push('/');
        }
      } else if (data?.error) {
        throw new Error(data.error.message);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      dispatch({
        type: actions.displayError,
        payload: {
          type: 'danger',
          message: error.message,
        },
      });
    } finally {
      dispatch({
        type: actions.searchVideo,
        payload: {
          search: '',
        },
      });
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
            onChange={(e) =>
              dispatch({
                type: actions.searchVideo,
                payload: {
                  search: e.target.value,
                },
              })
            }
          />
          <SearchingButton name="search" type="submit" title="search">
            <FontAwesomeIcon icon={faSearch} />
          </SearchingButton>
        </Label>
      </form>
    </SearchContainer>
  );
}

export default SearchingBar;
