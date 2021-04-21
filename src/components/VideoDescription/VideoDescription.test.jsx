import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import themes from '../App/Theme';
import VideoDescription from './VideoDescription.component';

const mockVideo = {
  title: "Video's title",
  tags: ['react', 'javascript', 'hooks'],
  likes: 1,
  dislikes: 0,
  views: 1,
};
jest.mock('../../state/User', () => ({
  useUserAccount: () => ({
    state: { favoriteVideos: [], authenticated: true, showMenu: true },
    dispatch: () => {},
  }),
}));

describe('VideoDescription component is well rendered', () => {
  it('renders the styled VideoDescription', () => {
    render(<VideoDescription video={mockVideo} />);
    const heading = screen.getByRole('heading', {
      name: /Video's title/i,
    });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText('react')).toBeInTheDocument();
  });

  it("renders the VideoDescription's and the font color matches the theme", () => {
    render(
      <ThemeProvider theme={themes.light}>
        <VideoDescription video={mockVideo} />
      </ThemeProvider>
    );
    const heading = screen.getByRole('heading', {
      name: /Video's title/i,
    });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText('javascript')).toBeInTheDocument();
    expect(heading).toHaveStyle('color: #003f87');
  });
});
