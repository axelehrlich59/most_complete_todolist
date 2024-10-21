import './index.css';

const AddTodoBar = ({
  onChangeValue,
  inputValue,
  addNewTodos,
}) => {

  return (
    <form className="form-topbar" onSubmit={addNewTodos}>
      <label className="label-title">Add new todo's</label>
      <div className="container-topbar">
        <input
          type="text"
          onChange={onChangeValue}
          value={inputValue}
          data-testid="form-input-text"
        />
        <button className="button-topbar" type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddTodoBar;