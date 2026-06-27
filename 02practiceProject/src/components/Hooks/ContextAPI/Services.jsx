import { useHook} from ".";

export const Services = () =>{
    const {userName,userAge}=useHook();
    return(
        <h1>hello(Services) {userName},,,,your age is {userAge}</h1>
    )
}