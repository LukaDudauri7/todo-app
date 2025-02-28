import './TodoItem.css';
import deleteImage from '../../assets/delete.jpg';

function TodoItem({ tasks, removeTask }) {
    return (
        <div>
            {
                tasks.map((task, index) => (
                <div key={index} className="todo-item-container">
                    <div className="todo-item"> {task} </div>
                    <img src={deleteImage} onClick={ () => removeTask(index)}/>
                </div>
                ))
            }
        </div>
    );
}

export default TodoItem;