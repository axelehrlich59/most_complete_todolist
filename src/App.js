import './App.css';
import Todolist from './Todos/index.js';
import Header from './Header/index.js';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Header />
      </div>
      <Todolist />
    </div>
  );
}

export default App;
