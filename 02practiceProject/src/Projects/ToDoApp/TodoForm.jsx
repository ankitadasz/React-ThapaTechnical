import { useState } from "react";
const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({
  id: "",
  content: "",
  checked: false,
});
     const handleInput = (value) => {
    setInputValue({id:value,content:value, checked:false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onAddTodo(inputValue)
    setInputValue({
  id: "",
  content: "",
  checked: false,
});
    }
    
    
    

  return (
    <section className="Form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Give Your Input Here"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInput(event.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className="Todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
  };
export default TodoForm;
