import Card from "./Card";
import Details from "../JSON/Details.json";
const Body = () => {
  // const handleButtonClick = () => {
  //   return(
  //     alert("hey the movie is on netflix")
  //   )
  // }

  // return (
  //   <>
  //     {Details.map((item) => (
  //       <Card
  //         key={item.id}
  //         imgUrl={item.imgUrl}
  //         name={item.name}
  //         rating={item.rating}
  //         cast={item.cast}
  //         summary={item.summary}
  //         buttonClick={handleButtonClick}
  //       />
  //     ))}
  //   </>
  // );

 const handleClick = () =>{
  return(
    <>
    {console.log("CLicked")}
    </>
  )
 }


return(
  <>
  
   <div 
   onClickCapture={()=>console.log("Person liked the reel")}
  
  style={{
        backgroundColor: "blue",
        width: "400px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
   >
    <div
    onClickCapture={()=>console.log("Like count increase")}
            style={{
          backgroundColor: "yellow",
          width: "200px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}

    >
      <button
      onClick={()=>console.log("Show on the reel view")}>Click Me
      </button>
    </div>
   </div>


  </>
)
};
export default Body;
