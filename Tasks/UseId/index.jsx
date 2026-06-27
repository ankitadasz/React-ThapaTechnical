import { useId } from "react";
export const UseId = () =>{
//    const usernameId=useId();
//    const emailId=useId();

const id=useId();

    return(
        <form>
            <div>
                <label htmlFor={id+"usernameId"}>Username:</label>
                <input type="text" id={id+"usernameId"} name="name"/>
            </div>
            <div>
                <label htmlFor={id+"emailId"}>Email:</label>
                <input id={id+"emailId"} type="email" name="email"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}