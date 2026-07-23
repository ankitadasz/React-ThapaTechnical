// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./Features/Tasks/TaskSlice";
// const ADD_TASK = "task/add";
// const DELETE_TASK = "task/delete";
// const FETCH_TASK = "task/fetch";

// export const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     ///case for adding task///
//     case ADD_TASK:
//       return {
//         ...state,
//         task: [...state.task, action.payload],
//       };
//     ///case for deleting task///
//     case DELETE_TASK:
//       const updatedTask = state.task.filter((currTask, index) => {
//         return index !== action.payload;
//       });
//       return {
//         ...state,
//         task: updatedTask,
//       };
//     ///case for fetching task///
//     case FETCH_TASK:
//       return {
//         ...state,
//         task: [...state.task, ...action.payload],
//       };
//     default:
//       return state;
//   }
// };

//This belows are actioncreator
// export const addTask = (data) => {
//   return { type: ADD_TASK, payload: data };
// };

// export const deleteTask = (id) => {
//   return { type: DELETE_TASK, payload: id };
// };

// //!oldStyle
// export const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// console.log(store);

// console.log(taskReducer);

//!newStyle
export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer, //or u can write simply taskReducer instead of taskReducer:taskReducer
  },
});

//middleware function
export const fetchTask = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );
      const task = await res.json();
      console.log(task);
      dispatch({
        type: FETCH_TASK,
        payload: task.map((currTask) => currTask.title),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
