import { useEffect, useState } from "react";


const LoadScreen = ()=>{
    const [message,setMessage]=useState("Loading...⌛")
    useEffect (()=>{
        setTimeout(()=>{
            setMessage("welcome Krishna ji...🦚🦚🦚")
        },3000)
         

    },[])
    return(
        <>
        <h1>{message}</h1>
        </>
    )
}
export default LoadScreen;