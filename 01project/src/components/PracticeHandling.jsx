const PracticeHandling=()=>{
    const userClick = (name) =>{
        alert(`Hey ${name}`)
    }
    const userHover = ()=>{
        alert("Thanks for hovering")
    }
    return(
        <>
        <WelcomeUser buttonClick={()=>userClick("Ankita")}
        buttonHover={userHover}
        />
        </>
    )
}

const WelcomeUser = (props) =>{
    const GreetUser = () => {
        console.log("Hey User How are you");
        props.buttonClick()
        }
    return (
        <>
        <button onClick={props.buttonClick}>Click me</button>
        <button onMouseEnter={props.buttonHover}>Hover Me</button>
        <button onClick={GreetUser}>Greet</button>
        </>
    )
}
export default PracticeHandling;