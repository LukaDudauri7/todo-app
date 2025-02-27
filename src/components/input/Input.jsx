import './Input.css';
import add from '.././../assets/add.jpg';
function Input() {
    return (
        <div>
            <div className="header-container">
                <div className='input-container'>
                    <input 
                        className='input'
                        type="text" 
                        id="tood-input" 
                        required minlength="4" 
                        size="20" 
                    />
                </div>
                <img id="submit" src={add}></img>
            </div>
        </div>
    );
}

export default Input;