
const TodoKey="lets party"
export const GetLocalStorageData  =()=>{
  const rawTodo=localStorage.getItem(TodoKey)
    if(!rawTodo) return [];
     return JSON.parse(rawTodo)
}
export const SetLocalStorageData = (task)=>{
      localStorage.setItem(TodoKey, JSON.stringify(task));
}

