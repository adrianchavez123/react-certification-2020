import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from './Dialog.component';

jest.mock('../../state/Video', () => ({
  useVideo: () => {
    return { state: null, dispatch: () => {} };
  },
  actions: {
    closeDialog: () => {},
  },
}));

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

  it('closes a dialog', () => {
    render(<Dialog type="danger" message="Daanger!" />);
    expect(screen.getByRole('dialog', 'Daanger!')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
  });
});
