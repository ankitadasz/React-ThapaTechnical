import { useEffect, useState } from "react";
import "./ToDo.css";
import TodoForm from "./TodoForm";
import ToDoList from "./ToDoList";
import DateAndTime from "./DateAndTime";
import { GetLocalStorageData, SetLocalStorageData } from "./TodoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => GetLocalStorageData());
  const RemoveItem = (id) => {
    const newItem = task.filter((item) => item.id !== id);
    setTask(newItem);
  };

  const CheckItem = (clickedTask) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === clickedTask.content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });

    setTask(updatedTask);
  };

  const RemoveAll = () => {
    setTask([]);
  };
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const ifTodocontentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodocontentMatched) return;
    setTask((prev) => [...prev, { id, content, checked }]);
  };

  SetLocalStorageData(task);
  //local storage pe add karna he

  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>

        <DateAndTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnorder-list">
        <ul>
          {task.map((currTask, index) => (
            <ToDoList
              key={index}
              data={currTask}
              checked={currTask.checked}
              onDeleteTodo={RemoveItem}
              onCheckTodo={CheckItem}
            />
          ))}
        </ul>
      </section>
      <section className="clear-all">
        <button
          className="clear-btn"
          onClick={() => {
            RemoveAll();
          }}
        >
          Clear All
        </button>
      </section>
    </section>
  );
};
export default Todo;
