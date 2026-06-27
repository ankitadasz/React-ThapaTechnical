import { useState } from "react"
const Contact = ()=>{
    const [name,setName]=useState("")
    const [mail,setMail]=useState("")
    const [password,setPassword]=useState("")
    
    const getInput = (event) =>{
        const {name,value}=event.target
        switch(name){
           case "name":{
            setName(value)
        } 
          case "mail":{
            setMail(value)
        }  
         case "password":{
            setPassword(value)
        } 
        }
    }


    const handleSubmit = (event) =>{
        event.preventDefault();
        const data ={
            name,
            mail,
            password
        }

        localStorage.setItem("UserData",JSON.stringify(data))
    }



    return(
        <>
        <form
        onSubmit={handleSubmit}
        >
            <h1>ContactForm</h1>
            <div>
                <label htmlFor="name">
                <b>Username:</b>
                </label>
                <input
                name="name"
                type="text"
                placeholder="Give your name"
                autoComplete="off"
                value={name}
                onChange={getInput}
                />

                 <label htmlFor="mail">
                <b>Usermail:</b>
                </label>
                <input
                name="mail"
                type="mail"
                placeholder="Give your mail"
                autoComplete="off"
                value={mail}
                onChange={getInput}
                />


                 <label htmlFor="password">
                <b>UserPassword:</b>
                </label>
                <input
                name="password"
                type="password"
                placeholder="Give your password"
                autoComplete="off"
                value={password}
                onChange={getInput}
                />
            </div>
            <button 
            type="submit"
            >
                Submit
            </button>

        </form>
        </>
    )
}
export default Contact