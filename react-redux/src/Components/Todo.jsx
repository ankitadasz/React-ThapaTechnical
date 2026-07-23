import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, fetchTask } from "../Store";
export const Todo = () => {
  const [task, setTask] = useState("");

  const state = useSelector((store) => store.taskReducer.task); //Here the useSelector will only read the data from the redux store and there is no other work of it
//The (state) => state.task) is a normal arrow function which is saying from the redux store i only want the task property
// the basic meaning of this code is use USESELECTOR to go to the store and bring me the task array

 const tasks=useSelector(state =>state.taskReducer.task)
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    return setTask("");
  };

  const handleTaskDelete = (index) => {
    return dispatch(deleteTask(index));
  };
  const handleFetchTasks = () =>{
    dispatch(fetchTask())
  }

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>
          To-do List:
        </h1>

        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Task</button>
          </form>
        </div>
        <button onClick={handleFetchTasks}>Fetch Tasks</button>

        <ul id="list-container">
          {tasks?.map((currTask, index) => {
            return (
              <li key={index}>
                <p>
                  {index + 1}:{currTask}
                </p>
                <button onClick={() => handleTaskDelete(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
