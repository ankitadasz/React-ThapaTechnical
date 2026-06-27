import { useEffect, useState } from "react";
const Toggle = () => {
  const [background, setBackground] = useState(false);
  const changeMode = () => {
    setBackground(!background);
  };
  useEffect(() => {
    if (background) {
      document.body.style.backgroundColor = "blue";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [background]);

  return (
    <>
      <button onClick={() => changeMode()}>Click</button>
    </>
  );
};
export default Toggle;
