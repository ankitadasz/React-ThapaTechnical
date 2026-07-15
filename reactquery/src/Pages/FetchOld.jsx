import { useState } from "react";
import { fetchData } from "../Api/api";
import { useEffect } from "react";

export const FetchRQ = () => {

  const getPostData = async () => {
    try {
      const res = await fetchData();
      console.log(res);
     setPosts(res.data);
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  useEffect(() => {
    getPostData();
  }, []);

  useQuery({
    queryKey:['posts'],//useState
    queryFn:getPostData()//useEffect
  })



  return (
    <ul>
      {posts?.map((currElem) => {
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
