import { createStore } from "redux";
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
  task: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask
      };
    default:
      return state;
  }
};
const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
export const store = createStore(taskReducer);
console.log(store);
console.log("InitialState:", store.getState());
store.dispatch(addTask("Hello Ankita Pretty gurll"));
console.log("updatedState:", store.getState());
store.dispatch(addTask("Ankita will buy a big home"));
store.dispatch(addTask("Ankita will buy a big big home"));
store.dispatch(addTask("Ankita will buy a big biggggggggg home"));
store.dispatch(addTask("Ankita will buy a bigggggggggggggggg home"));
store.dispatch(addTask("Ankita will buy a biggggggggggggggggggggg home"));
store.dispatch(addTask("Ankita will buy a biggggggggggggggggggggggggg home"));

console.log("updatedState:", store.getState());
store.dispatch(deleteTask(0));
console.log("DeletedState:", store.getState());
