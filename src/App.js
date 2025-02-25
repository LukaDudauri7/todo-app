import add from './add.jpg';
import './App.css';

function App() {
  return (
    <div>
      <h1> To Do List</h1>
      <div className='ul-bg'>
        <ul>
          <label for="name">Name (4 to 8 char):</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required minlength="4" 
            maxlength="8" 
            size="10" 
          />
          <img src={add}></img>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
