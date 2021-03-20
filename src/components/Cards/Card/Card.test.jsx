import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('Test a single card', () => {
  test('Render a card', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
  });
});
