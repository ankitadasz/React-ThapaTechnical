import { forwardRef, useId, useRef } from "react";

const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handleSubmit = (e)=>{
e.preventDefault();
console.log(username.current.value,password.current.value);
  }

  return (
    <> 
    <form onSubmit={handleSubmit}>
      <Before19 label="username" ref={username} />
      <Before19 label="password" ref={password}/>
    </form>
    <button type="submit">Submit</button>
    </>
   

  );
};


// Create the Component <Before19/>


const Before19 = forwardRef ((props,ref)=>{
    const id =useId()
return(
    <div>
        <label
        htmlFor={id}
        >
           {props.label} 
           <input
           type="text"
           ref={ref}
           />
        </label>
    </div>
)
})
export default ForwardRef;