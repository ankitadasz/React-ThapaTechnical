import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import { fetchData } from "../Api/api";
export const FetchRQ = () => {
  
 const {data}= useQuery({
    queryKey:['posts'],//useState
    queryFn: fetchData,//useEffect
  })



  return (
    <ul>
      {data?.map((currElem) => {
        const { title, body, id } = currElem;
        return (
          <li key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        );
      })}
    </ul>
  );
};
