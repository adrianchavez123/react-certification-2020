import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    videoId: 'HYyRZiwBWc8',
  }),
}));

describe("Test  header's menu ", () => {
  it("renders application's name", () => {
    render(<Header />);
    expect(screen.getByText('reactbootcamp 2021')).toBeInTheDocument();
  });

  it("renders application's searchingbar component", () => {
    render(<Header />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it("renders application's preferences component", () => {
    render(<Header />);
    expect(screen.getByTestId('preferences')).toBeInTheDocument();
  });
});
