import { useEffect ,useState} from "react";


const DateAndTime = () =>{
    const [DateTime, setDateTime] = useState("");

 useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const ShowDate = now.toLocaleDateString();
      const ShowTime = now.toLocaleTimeString();
      setDateTime(`${ShowDate}-${ShowTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    return(
         <h2 className="Date-Time">{DateTime}</h2>
    )
}
export default DateAndTime;