const Father = ()=>{
    return (
        <>
        <Son name="Ankita"/>
        </>
    )
}
const Son = ({name})=>{
    return(
        <>
        <h1>Son Name:{name}</h1>
        <GrandSon name={name}/>

        </>
    )
}
const GrandSon = ({name}) =>{
    return(
        <>
        <h2>GrandSon Name:{name}</h2>
        
        </>
    )
}
export default Father;