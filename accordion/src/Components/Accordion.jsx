import { useState } from "react";
import faq  from "../Api/faq.json";
import { useEffect } from "react";
import { FAQ } from "./UI/FAQ";
export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId,setActiveId]=useState(false);
  useEffect(() => {
    setData(faq);
  }, []);
  const handleButton = (id) =>{
    setActiveId((prev)=>(prev===id ? false : id));

  }
  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((currelem) => {
          return (
            <FAQ 
            key={currelem.id} 
            currData={currelem} 
            isActive={activeId===currelem.id}
            onToggle={()=>{
                handleButton(currelem.id);
            }}
            
            />
          );
        })}
      </ul>
    </>
  );
};
