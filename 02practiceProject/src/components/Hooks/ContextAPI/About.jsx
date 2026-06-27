import { useContext } from "react"
import { userInfo } from ".";

export const About = () =>{
    const {userName,userAge}=useContext(userInfo);
    return(
        <h1>hello (About){userName},,,,your age is {userAge}</h1>
    )
}