import { useEffect, useState } from "react";
const LiveClock = ()=>{
    const [tym,setTym]=useState(0)
   
    useEffect(()=>{
        setInterval(()=>{
            const tem=new Date();
            setTym(tem.toLocaleTimeString())

        },1000)
    },[])
   
    return(
        <>
        <h1>Time:{tym}</h1>
        </>
    )
}
export default LiveClock;