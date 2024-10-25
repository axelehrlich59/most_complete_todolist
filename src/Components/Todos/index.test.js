import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todolist from './index.js';

test('it should display a content when we have no todos', () => {
  render(<Todolist />);

  const titleEmptyTodo = screen.getByText(/Nothing to do today ?/i);
  const descriptionEmptyTodo = screen.getByText(/Try it, add some new !/i);

  expect(titleEmptyTodo).toBeInTheDocument();
  expect(descriptionEmptyTodo).toBeInTheDocument();
});

test('it should not display empty todos message when todos are present and check if todos are set', () => {
  render(<Todolist />);

  const input = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /Add/i });

  fireEvent.change(input, { target: { value: 'First Todo' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Second Todo' } });
  fireEvent.click(addButton);

  const titleEmptyTodo = screen.queryByText(/Nothing to do today ?/i);
  const descriptionEmptyTodo = screen.queryByText(/Try it, add some new !/i);

  expect(titleEmptyTodo).not.toBeInTheDocument();
  expect(descriptionEmptyTodo).not.toBeInTheDocument();

  expect(screen.getByText('First Todo')).toBeInTheDocument();
  expect(screen.getByText('Second Todo')).toBeInTheDocument();
});
