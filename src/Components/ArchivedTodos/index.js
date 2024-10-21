import './index.css';
import { FaTrash, FaArchive } from 'react-icons/fa'

const ArchivedTodos = ({
  archivedTodos,
  removeArchivedTodo,
}) => {

  return (
    <>
      {archivedTodos.length > 0 && <div>
        <h3 className="title-archive-todo">Archived todo's</h3>
        <ul>
        {archivedTodos && archivedTodos.map(todo => (
          <li key={todo.id}>
            <span className="archived-todo-content">{todo.content}</span>
            <label>
              <FaTrash onClick={() => removeArchivedTodo(todo.id)} className="trash-todo"/>
            </label>
          </li>
        ))}
        </ul>
      </div>}
    </>
  );
}

export default ArchivedTodos;