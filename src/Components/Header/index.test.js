import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index.js';

test('Show the text "Todo List"', () => {
  render(<Header />);

  const headerElement = screen.getByText(/Todo List/i);

  expect(headerElement).toBeInTheDocument();
});
