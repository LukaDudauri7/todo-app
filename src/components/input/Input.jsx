import './Input.css';
import add from '../../assets/add.jpg';
import { useState } from 'react';
function Input({addTask}) {
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if(inputValue.trim() !== '') {
            addTask(inputValue);
            setInputValue('');
        }
    }
    return (
        <div className="header-container">
            <div className='input-container'>
                <input 
                    className='input'
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a task name"
                />
            </div>
            <img onClick={handleAddTask} id="submit" src={add}></img>
        </div>
    );
}

export default Input;