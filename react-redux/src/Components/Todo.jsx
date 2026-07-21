import {useSelector} from "react-redux";
export const Todo = () =>{
 const state=   useSelector((state)=>state.task)
 const handleTaskDelete = (index)=>{
    
 }
//  console.log("state",state);
    return (
  <div className="container">
    <div className="todo-app">
      <h1>
        <i className="fa-regular fa-pen-to-square"></i>
        To-do List:
      </h1>

      <div className="row">
        <form>
          <input
            type="text"
            id="input-box"
            placeholder="Add a new task"
          />
          <button>Add Task</button>
        </form>
      </div>

      <ul id="list-container">
        {
            state.map((currTask,index)=>{
                return(
                    <li key={index}>
                        <p>{index}:---{currTask}</p>
                        <button onClick={()=>handleTaskDelete(index)}>Delete</button>

                    </li>

                )
            })
        }

      </ul>
    </div>
  </div>
);
}