import add from './add.jpg';
function Input() {
    return (
        <div>
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
        </div>
    );
}

export default Input