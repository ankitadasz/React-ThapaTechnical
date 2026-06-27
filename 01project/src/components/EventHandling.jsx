import "./EV.css"
const EventHandling = () =>{
    const handleButtonClick =(event)=>{
     alert("hey i am")
    }
    const Welcome=(user)=>{
        console.log(`hey ${user} welcome`)
    }
    return(
        <>
        <button onClick={(event)=>handleButtonClick(event) }>Click Me</button>
        <br/>
        <button onClick={(event)=> console.log(event)}>Inline function</button>
        <br/>
        <button onClick={()=> alert('Hey i am inline event function')}>inline arrow function</button>
        <br/>
        <button onClick={()=>Welcome("an")}> clickkkkkkkme </button>
        </>
    )
}
export default EventHandling;