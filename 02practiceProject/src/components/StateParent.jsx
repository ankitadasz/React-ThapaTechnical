import { useState } from "react";

const StateParent = () => {
  const [Data, setData] = useState([
    { name: "Ankita", age: 19 },
    { name: "Sunit", age: 21 },
    { name: "Soumya", age: 20 },
    { name: "Smaranika", age: 21 },
     { name: "Subhajit", age: 20 },
  ]);
  const userCount = Data.length; //here the user count is derived state
  const UserAge = 
     Data.reduce((ac, item) => (ac = ac + item.age), 0)
  
  const avgAge= UserAge/userCount;
  console.log(avgAge)
  console.log(userCount);
  console.log(UserAge);

  return (
    <>
      {Data.map((item) => {
        return (
          <div key={item.name}>
            <h1>name:{item.name}</h1>
            <h1>age:{item.age}</h1>
            <h3>Total User:{userCount}</h3>
            <h1>Total Age:{UserAge}</h1>
            <h3>Avg Age:{avgAge}</h3>
          </div>
        );
      })}
    </>
  );
};
export default StateParent;
