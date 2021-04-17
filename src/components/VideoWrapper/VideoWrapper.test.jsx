import React from 'react';
import { render } from '@testing-library/react';
import VideoWrapper from './VideoWrapper.component';

jest.mock('../../hooks/useWindowSize', () => ({
  useVideo: () => [500, 500],
}));

describe('Displays VideoWrapper component', () => {
  it("renders video's wrapper", () => {
    render(<VideoWrapper videoId="Po3VwR_NNGk" />);
  });
});
