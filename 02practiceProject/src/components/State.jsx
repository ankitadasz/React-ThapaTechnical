import { useState } from "react";
const State = () =>{console.log("parent component rendered")
    const [count,setCount]=useState(100);
    

    const handleButtonClick = ()=>{
        setCount(count-1)
    }
    return(
        <>
        <div>

       
        <h1>{count}</h1>
        <button 
        onClick={handleButtonClick}
        >Decrement</button> 
        </div>
        <ChildComp count={count}/>

        </>
    )
}
function ChildComp({count}){
    console.log("Child component rendered")
    return<h2>
        Child Component:{count}
    </h2>
}
function SiblingComp({count}){
    console.log("Sibling component rendered")
    return<h2>
        Sibling Component:{count}
    </h2>
}

export default State;