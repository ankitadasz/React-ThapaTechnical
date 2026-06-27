import { useState } from "react";
const LiftingStateUp = () => {
     const [inputValue, setInputValue] = useState("")
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} setInputValue={setInputValue}/>
    </>
  );
};

const InputComponent = ({inputValue,setInputValue}) => {
 
  return(

    <input type="text" placeholder="Enter your name" value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}></input>
)
};
const DisplayComponent = ({inputValue,setInputValue}) =>{
    return  <p>
        The current input value is:{
            inputValue
        }

    </p>
  
}
export default LiftingStateUp;