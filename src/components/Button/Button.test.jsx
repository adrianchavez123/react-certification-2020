import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import themes from '../App/Theme';
import Button from './Button.component';

describe('styled button', () => {
  it('renders the styled button', () => {
    render(<Button>Hey, I am a button</Button>);
    expect(screen.getByText('Hey, I am a button')).toBeInTheDocument();
  });
  it("renders the button's color matches the theme", () => {
    render(
      <ThemeProvider theme={themes.light}>
        <Button>Hey, I am a button</Button>
      </ThemeProvider>
    );
    expect(screen.getByText('Hey, I am a button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveStyle('background: #00419e');
  });
});
