import './App.css';
import Input from './Input';
import TodoItem from './TodoItem';

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
