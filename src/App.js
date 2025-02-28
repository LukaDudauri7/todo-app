import './App.css';
import Input from './components/input/Input';
import TodoItem from './components/todoItem/TodoItem';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(['Task']);
  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
    }
  };
  const removeTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  return (
    <div>
      <h1> Todo List</h1>
      <Input addTask={addTask} />
      <TodoItem tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
