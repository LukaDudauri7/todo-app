import './TodoItem.css';
import deleteImage from '../../assets/delete.jpg';

function TodoItem({ tasks }) {
    return (
        <div>
            {
                tasks.map((task, index) => (
                <div className="todo-item-container">
                    <div className="todo-item"> {task} </div>
                    <img src={deleteImage}/>
                </div>
                ))
            }
        </div>
    );
}

export default TodoItem;