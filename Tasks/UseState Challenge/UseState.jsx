import "./UseState.css";
import { useState } from "react";

const StateChallenge = () => {
  const [count, setCount] = useState(0);
  const[input,userInput]= useState("")

  const increaseCount = () => {
    if(input===""){
        setCount(count+1)
    }
    else{
        setCount(count+input)
    }
  };
  const decreaseCount = () => {
    if(input===""){
        setCount(count-1)
    }
    else{
        setCount(count-input)
    }
  };
  const resetCount = () => {
      if(input===""){
        setCount(0)
    }
    else{
        userInput("")
        setCount(0)
    }
    }
  
  







  return (
    <div className="state-container">
      <h1>UseState Challenge</h1>

      <p>Count:{count}</p>

      <input className="step-input" type="number" placeholder="Enter Steps" value={input}
      onChange={(event) =>
  userInput(
    event.target.value === ""
      ? ""
      : Number(event.target.value)
  )
}
      />

      <div className="btn-container">
        <button className="increase" onClick={() => increaseCount()}
            disabled = {count>=100}
            >
          Increment
        </button>

        <button className="decrease" onClick={() => decreaseCount()}
             disabled = {count<=0}
            >
          Decrement
        </button>

        <button className="reset" onClick={() => resetCount()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StateChallenge;
