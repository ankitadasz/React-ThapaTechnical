import { store } from "../../Store";
import { addTask, deleteTask } from "./TaskSlice";

console.log(store.getState());

console.log(store.dispatch(addTask("Buy apple")));

console.log(store.dispatch(addTask("Buy applrvffge")));
console.log(store.dispatch(deleteTask(1)))
console.log(store.getState());
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


