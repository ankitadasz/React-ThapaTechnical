import { useEffect, useState } from "react";
const Alert = () => {
  const [count, setCount] = useState(0);
  const upCount = () => {
    setCount(count + 1);
  };
  useEffect(()=>{
    if(count==5){
        alert('You reached 5!')
    }

  },[count])
  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={() => upCount()}>Increment</button>
    </>
  );
};
export default Alert;
