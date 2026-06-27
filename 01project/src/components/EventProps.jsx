const EventProps = () =>{
    const HandleWelcome = (user)=>{
        alert(`hey${user}`)
    }
     const HandleHover= ()=>{
        alert(`hey thanks for hovering me`)
    }
    //above two are function created by parents 
    //then function will be [assed to children as props



    return (
        <>
        <Welcome buttonClick={()=>HandleWelcome("Ankita")}
            buttonMouseHover={HandleHover}
            />
        </>
    )
}
//above is mother component
//below is child component
const Welcome = (props)=>{
    const {buttonClick,buttonMouseHover}=props;
    const HandleGreetings = ()=>{
        console.log("Hey user");
        buttonClick();
    }
    return(
        <>
        <button onClick={buttonClick}>Clickme</button>
        <button onMouseEnter={props.buttonMouseHover}>Hover me</button>
        <button onClick={HandleGreetings}>Greetme</button>
        
        </>
    )
}

export default EventProps;