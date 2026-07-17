import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../Api/api";
export const FetchRQ = () => {
  
 const {data,isLoading,isError,error}= useQuery({
    queryKey:['post'],//useState
    queryFn: fetchData,//useEffect
    // gcTime:1000,
    // staleTime:100000000,
    refetchInterval:2000,
    refetchIntervalInBackground:true,
  })
  if(isLoading) return <p>is Loading....</p>;
  if(isError) return <p>Error:{error.message || "Something went wrong!!!!"}</p>



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
