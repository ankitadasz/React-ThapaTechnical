import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

export const taskReducer = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload)
    },
    deleteTask(state, action) {
      state.task=state.task.filter((currTask,index)=>
        index !== action.payload
      )


    },
  },
});
export const { addTask, deleteTask } = taskReducer.actions;
