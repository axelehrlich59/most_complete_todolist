import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todolist from './index.js';
import AddTodoBar from '../AddTodoBar/index.js';

test('it should display a content when we have no todos', () => {
  render(
  <Todolist
    initialTodo={[]}
  />);

  const titleEmptyTodo = screen.getByText(/Nothing to do today ?/i);
  const descriptionEmptyTodo = screen.getByText(/Try it, add some new !/i);

  expect(titleEmptyTodo).toBeInTheDocument();
  expect(descriptionEmptyTodo).toBeInTheDocument();
});

test('it should not display empty todos message when todos are present and check if todos are set', async () => {
  render(
  <Todolist>
    <AddTodoBar />
  </Todolist>);

  const inputField = await screen.findByTestId('form-input-text')
  const addButton = screen.getByRole('button', { name: /Add/i });

  fireEvent.change(inputField, { target: { value: 'First Todo' } });
  fireEvent.click(addButton);
  fireEvent.change(inputField, { target: { value: 'Second Todo' } });
  fireEvent.click(addButton);

  const titleEmptyTodo = screen.queryByText(/Nothing to do today ?/i);
  const descriptionEmptyTodo = screen.queryByText(/Try it, add some new !/i);

  expect(titleEmptyTodo).not.toBeInTheDocument();
  expect(descriptionEmptyTodo).not.toBeInTheDocument();

  expect(screen.getByText('First Todo')).toBeInTheDocument();
  expect(screen.getByText('Second Todo')).toBeInTheDocument();
});
