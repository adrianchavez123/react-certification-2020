import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoSuggestions from './VideoSuggestions.component';

describe('Test Video suggestions is in the page ', () => {
  it('renders the component', () => {
    render(<VideoSuggestions />);
    expect(screen.getByTestId('video-suggestions')).toBeInTheDocument();
  });
});
