import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Private from './Private.component';

jest.mock('../../state/User', () => ({
  useUserAccount: () => ({ state: { theme: 'light', authenticated: true } }),
}));

describe('Private component is loaded', () => {
  it('renders the app', () => {
    render(
      <MemoryRouter>
        <Private />
      </MemoryRouter>
    );
  });
});
