// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";
const initialState = {
  task: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    ///case for adding task///
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    ///case for deleting task///
    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };
    ///case for fetching task///
    case FETCH_TASK:
      return {
        ...state,
        task: [...state.task, ...action.payload],
      };
    default:
      return state;
  }
};
export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
//!oldStyle
// export const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// console.log(store);

//!newStyle
export const store=configureStore({
  reducer:{
    taskReducer:taskReducer,
  }
})
console.log(store.getState());
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

//middleware function
export const fetchTask = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const task = await res.json();
      console.log(task);
      dispatch({ type: FETCH_TASK, payload: task.map((currTask)=>currTask.title) });
    } 
    catch (error) {
      console.log(error)
    }
  };
};
