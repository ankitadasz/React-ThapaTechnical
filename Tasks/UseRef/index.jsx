import { useRef } from "react";

const UseRef = () => {
  const username = useRef(null)
  const password = useRef(null)

  const showData = (e) => {
    e.preventDefault(); 
    console.log(username.current.value,password.current.value)
  };
  return (
    <form onSubmit={showData}>
      <input type="text" id="username" ref={username}/>
      <br />
      <input type="password" id="password" ref={password} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default UseRef;
