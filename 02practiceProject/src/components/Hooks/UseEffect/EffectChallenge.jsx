import { useEffect, useState } from "react";
const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increaseCount = () => {
    setCount(count + 1);
  };
  const getInput = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    console.log(input);
  }, [input]);

  useEffect(()=>{
    document.title = `count:${count}`
  },[count])
  return (
    <div className="container effect-container">
      <h1>UseEffect Challenge</h1>
      <p>
        Count:<span>{count}</span>
      </p>
      <button onClick={() => increaseCount()}>Increment</button>
      <p>
        Name:{input}
        <span></span>
      </p>
      <input type="text" value={input} onChange={getInput} />
    </div>
  );
};
export default EffectChallenge;
