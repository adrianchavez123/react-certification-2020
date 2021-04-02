import React from 'react';
import { render, screen } from '@testing-library/react';
import Dialog from './Dialog.component';

describe('The dialog box', () => {
  it('renders the dialog alert', () => {
    render(<Dialog />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
  it('renders the success alert', () => {
    render(<Dialog type="success" message="Success!" />);
    expect(screen.getByRole('dialog', 'Success!')).toBeInTheDocument();
  });

  it('renders the danger alert', () => {
    render(<Dialog type="danger" message="Daanger!" />);
    expect(screen.getByRole('dialog', 'Daanger!')).toBeInTheDocument();
  });
});
