import {createStore} from "redux";
const ADD_TASK='task/add';
const DELETE_TASK='task/delete';
const initialState = {
    task:[]
}

export const taskReducer = (state=initialState,action) =>{
    switch (action.type) {
        case ADD_TASK:
    return {
        ...state,
        task:[...state.task,action.payload]
    }
    case DELETE_TASK:
        const updatedTask = state.task.filter((currTask,index)=>{
            return index !== action.payload;
        })
        return{
            ...state,
            task:[updatedTask]
        }
        default: 
        return state;
    }

}
const store = createStore(taskReducer);
console.log(store);
console.log("InitialState:",store.getState());
store.dispatch({type:ADD_TASK,payload:"Hello Ankita Pretty gurll"})
console.log("updatedState:",store.getState());
store.dispatch({type:ADD_TASK,payload:"Buy a big home"})
console.log("updatedState:",store.getState());
store.dispatch({type:DELETE_TASK,payload:0})
console.log("DeletedState:",store.getState())