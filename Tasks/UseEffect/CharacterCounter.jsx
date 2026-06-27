import { useEffect, useState } from "react";
const CharacterCounter = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const getInput = (event) => {
    setInput(event.target.value);
  };
  useEffect(()=>{
    setCount(input.length)
  },[input])

  return (
    <>
    <h1>Character Present:{count}</h1>
      <input type="text" value={input} onChange={getInput} />
    </>
  );
};
export default CharacterCounter;
