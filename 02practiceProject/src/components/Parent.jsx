import Child from "./Child";

const userData = [
  { name: "Ankita", age: 19 },
  { name: "Sunit", age: 21 },
  { name: "Soumya", age: 20 },
  { name: "Smaranika", age: 21 },
];
const Parent = () =>{
   return(
    <>
    {userData.map((item)=>(
        
        <Child
        key={item.name}
        name={item.name}
        age={item.age}
        />

    ))}
    </>
   )
}
export default Parent;