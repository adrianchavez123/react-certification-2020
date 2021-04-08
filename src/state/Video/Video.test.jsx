import { renderHook } from '@testing-library/react-hooks';
import { useVideo } from './Video.provider';
import youtubeMockVideos from '../../mocks/youtube-videos-mock.json';

const { items } = youtubeMockVideos;

describe('useVideo', () => {
  it('retrieves the initial context state', async () => {
    const { result } = renderHook(() => useVideo());
    expect(result.current).toEqual({
      search: '',
      videos: [...items],
      alert: { type: '', message: '' },
    });
  });
});
