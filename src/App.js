import './App.css';
import Todolist from './Components/Todos/index.js';
import Header from './Components/Header/index.js';

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
