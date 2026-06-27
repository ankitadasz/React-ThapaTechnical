import { useState } from "react";
import "../ShortCircuit.css";
const ShortCircuit = () => {
  const [login, setLogin] = useState(true);
  const [user,setUser]=useState("")

  const showText = () => {
    return setLogin(!login);
  };
 const ShowUser = (name)=>{
   setUser(name)

 }
 const ClearUser = ()=>{
    setUser("")
 }

  return (
    <section className="short-circuit Container">
      <h1>Hey! Welcome To The Short Circuit Evaluation</h1>
  {login &&
  (user ? (
    <p>{`hey ${user}`}</p>
  ) : (
    <p>You are logged In</p>
  ))}
    
      <div className="grid-three-cols">
        <button onClick={() => showText()}
            className="login"
            >
          
          Toggle Login State
        </button>
        <button
        onClick={()=>ShowUser("Ankita")}
       
       className="user"
       >
           
            
            Set Users</button>
        <button
        onClick={()=>ClearUser()}
        className="clearuser"
        >Clear Users</button>
      </div>
    </section>
  );
};
export default ShortCircuit;
