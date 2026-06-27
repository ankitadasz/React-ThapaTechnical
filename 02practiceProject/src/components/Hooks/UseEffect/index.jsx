import { useEffect, useState } from "react";

const ReactUseEffect = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const updatedTime = new Date();

      setTime(updatedTime.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h1>Hello,UseEffect</h1>
      <p>Date:{time}</p>
    </>
  );
};
export default ReactUseEffect;
