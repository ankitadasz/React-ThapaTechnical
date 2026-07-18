import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchData } from "../Api/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export const FetchRQ = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts",page], //useState
    queryFn: () => fetchData(page), //useEffect
    placeholderData:keepPreviousData,
  });
  if (isLoading) return <p>is Loading....</p>;
  if (isError)
    return <p>Error:{error.message || "Something went wrong!!!!"}</p>;

  return (
    <div>
      <ul>
        {data?.map((currElem) => {
          const { title, body, id } = currElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
              <p>{id}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div>
        <button disabled={page === 0 ? true:false} onClick={() => setPage((prev)=>prev-3)}>Prev</button>
        <h2>{page/3 +1}</h2>
        <button onClick={() => setPage((prev)=>prev+3)}>Next</button>
      </div>
    </div>
  );
};
