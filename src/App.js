import './App.css';
import Input from './Input';
import todoItem from './todoItem.jsx';

function App() {
  return (
    <div>
      <h1> Todo List</h1>
      <div className='ul-bg'>
          <Input />
      </div>
      <todoItem />
    </div>
  );
}

export default App;
