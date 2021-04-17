import { renderHook } from '@testing-library/react-hooks';
import useWindowSize from './useWindowSize';

describe('useWindowSize', () => {
  it(" returns the window's size", async () => {
    global.innerWidth = 500;
    global.innerHeight = 500;

    const { result } = renderHook(() => useWindowSize());
    expect(result.current).toStrictEqual([500, 500]);
  });
});
