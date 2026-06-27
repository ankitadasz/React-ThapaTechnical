import { memo, useCallback, useState } from "react";
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering Button : ${children}`);

  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${
        children === "Increment" ? "bg-green-400" : "bg-green-800"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
export default function UseCallBack() {
  const [count, setCount] = useState(0);

  const Increment = useCallback(() => {
    console.log("Inside Increment");
    setCount((prev) => prev + 1);
  }, []);
  


  const Decrement = useCallback (()=>{
    console.log("Inside Decrement")
  setCount((prev) => prev - 1);
  },[])
  return (
    <div
      className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center
        items-center bg-black text-white
        "
    >
      <h1 className="mb-4">Count:{count}</h1>
      <Button onClick={Increment}>Increment</Button>
      <Button onClick={Decrement}>Decrement</Button>
    </div>
  );
}
