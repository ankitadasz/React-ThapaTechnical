import { MdCheck, MdDeleteForever } from "react-icons/md";
const ToDoList = ({onDeleteTodo,data,checked,onCheckTodo}) =>{
    return(
         <li >
                      <span className={checked ? "check-list" : "not-check"}>{data.content}</span>
                      <button className="Check-btn"
                      onClick={()=>onCheckTodo(data)}
                      >
                        
                        <MdCheck />
                      </button>
                      <button
                        className="Dlt-btn"
                        onClick={() => {
                          onDeleteTodo(data.content)
                        }}
                      >
                        <MdDeleteForever />
                      </button>
                    </li>
    )
}
export default ToDoList;