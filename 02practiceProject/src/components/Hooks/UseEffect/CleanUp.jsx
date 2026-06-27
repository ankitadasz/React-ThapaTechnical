import { useEffect, useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
 const timer = setInterval(()=>{
         setCount((prev)=>prev+1)
    },1000) 
     return () => clearInterval(timer)
  },[])

  return (
    <div className="container">
      <h1>My Nam Jap Counter</h1>
      <p>{count}</p>
      <h3>
        Real
        <br />
        Time
        <br />
        Counter
      </h3>
    </div>
  );
};
export default CleanUp