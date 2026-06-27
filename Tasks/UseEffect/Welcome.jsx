import { useEffect, useState } from "react";
const Welcome = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const getInput = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    setMessage(`hello ${name}`)
  }, [name]);

  return (
    <>
      <h1>{message}</h1>
      <input type="text" value={name} onChange={getInput} />
    </>
  );
};
export default Welcome;
