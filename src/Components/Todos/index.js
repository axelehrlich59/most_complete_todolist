import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import { FaTrash, FaArchive } from 'react-icons/fa'
import AddTodoBar from '../AddTodoBar/index.js'
import ArchivedTodos from '../ArchivedTodos/index.js';
import useLocalStorage from '../../Hooks/UseLocalStorage/index.js'
import ArchiveAllTodos from '../ArchiveAllTodos/index.js';

const Todolist = ({
  initialTodo,
}) => {

  const [inputValue, setInputValue] = useState("");
  const defaultTodos = initialTodo !== undefined ? initialTodo : [];
  const [todos, setTodos] = useLocalStorage('tasks', defaultTodos);

  const [archivedTodos, setArchivedTodos] = useState([]);

  const onChangeValue = (e) => {
    setInputValue(e.target.value)
  }

  const addNewTodos = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      content: inputValue
    }

    setTodos([...todos, newTodo])
    setInputValue("")
  }

  const archiveTodo = (id) => {
    const prepareArchivedList = todos.filter((elem, index) => {
      if(elem.id === id) {
        todos.splice(index, 1)
        setArchivedTodos([...archivedTodos, elem])
      }
      return;
    })
    return prepareArchivedList
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const removeArchivedTodo = (id) => {
    setArchivedTodos(archivedTodos.filter(todo => todo.id !== id))
  }


  return (
    <>
      <div className="container-todo">
        <ArchiveAllTodos />
        <ul>
        {todos.length === 0 &&
          <div className="container-empty-todo">
            <h4 className="title-empty-todo">Nothing to do today ?</h4>
            <p>Try it, add some new !</p>
          </div>
        }
        {todos && todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.content}</span>
            <label>
              <FaTrash onClick={() => removeTodo(todo.id)} className="trash-todo"/>
              <FaArchive className="archive-todo" onClick={() => archiveTodo(todo.id)}/>
            </label>
          </li>
        ))}
        </ul>
        <AddTodoBar
          onChangeValue={onChangeValue}
          inputValue={inputValue}
          addNewTodos={addNewTodos}
        />
        <ArchivedTodos
          archivedTodos={archivedTodos}
          removeTodo={removeTodo}
          removeArchivedTodo={removeArchivedTodo}
        />
      </div>
    </>
  );
}

export default Todolist;