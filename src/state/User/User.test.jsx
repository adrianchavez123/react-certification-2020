import { renderHook } from '@testing-library/react-hooks';
import { useUserAccount } from './User.provider';

describe('useUserAccount', () => {
  it('retrieves the initial context state', async () => {
    const { result } = renderHook(() => useUserAccount());
    expect(result.current).toEqual({
      authenticated: false,
      email: '',
      theme: 'light',
      favoriteVideos: [],
    });
  });
});
