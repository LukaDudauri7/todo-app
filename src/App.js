import './App.css';
import Input from './components/input/Input';
import TodoItem from './components/todoItem/TodoItem';

function App() {
  return (
    <div>
      <h1> Todo List</h1>
      <div className='ul-bg'>
          <Input />
      </div>
      <TodoItem />
    </div>
  );
}

export default App;
