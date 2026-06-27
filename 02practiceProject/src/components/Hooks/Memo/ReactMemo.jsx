import MemoCount from "./MemoCount";
import { useMemo, useState } from "react";
import Counts from "./MemoCount";
export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const myBioData = useMemo(() => {
    return {
      name: "Ankita",
      age: 19,
    };
  },[]);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <Counts data={myBioData} />
    </>
  );
};
