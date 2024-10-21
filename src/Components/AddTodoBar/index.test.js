import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoBar from './index.js';

test('should show input with initial value set', async () => {
  const mockOnChangeValue = jest.fn();
  const mockAddNewTodos = jest.fn();

  render(
    <AddTodoBar
      onChangeValue={mockOnChangeValue}
      inputValue="John Doe"
      addNewTodos={mockAddNewTodos}
    />
  );

  const inputField = await screen.findByTestId('form-input-text');
  await waitFor(() => expect(inputField).toHaveDisplayValue('John Doe'));
});