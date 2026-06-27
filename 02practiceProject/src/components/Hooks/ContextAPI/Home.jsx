import { useContext } from "react";
import { useHook, userInfo } from ".";

export const Home = () =>{
    const newHook=true;
    let userName,userAge ;
    if(newHook){
        ({userName , userAge}  = useContext(userInfo));
    }
    return(
        <h1>hello {userName},,,,your age is {userAge}</h1>
    )
}