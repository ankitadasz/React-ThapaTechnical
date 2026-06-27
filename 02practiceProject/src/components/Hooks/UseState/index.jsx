import "../Hooks.css"
import { useState } from "react"
const Counter = () =>{
const [count , setCount] = useState(0)
const increaseCount = () =>{
     
        
         setCount(count+1)
     console.log("inner",count)
      
       

}
 console.log("ourter",count)
    return(
        <div className="container state-container"
        style={{
            textAlign:"center"
        }}
        >

            <h1>useState Hook!</h1>
            <br/>
            <p>Count:{count}</p>
            <button 
            onClick={()=> increaseCount()}
            >Click</button>

        </div>
    )
}
export default Counter;