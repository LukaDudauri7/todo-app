import add from '.././../assets/add.jpg';
function Input() {
    return (
        <div>
            <input 
                type="text" 
                id="tood-input" 
                required minlength="4" 
                size="20" 
            />
          <img id="submit" src={add}></img>
        </div>
    );
}

export default Input;