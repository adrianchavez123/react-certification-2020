import React from 'react';
import { render, screen } from '@testing-library/react';
import Tags from './Tags.component';

describe('The Tags container is rendered', () => {
  it('renders the tag container', () => {
    render(<Tags />);
  });

  it('renders the children correctly', () => {
    const labels = ['react', 'javascript', 'youtube'];
    render(<Tags labels={labels} />);
    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('javascript')).toBeInTheDocument();
    expect(screen.getByText('youtube')).toBeInTheDocument();
  });
});
