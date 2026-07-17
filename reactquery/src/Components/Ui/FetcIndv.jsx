import { useParams } from "react-router-dom";
import { FetchIndvData } from "../../Api/api";
import { useQuery } from "@tanstack/react-query";

export const FetchIndv = () =>{
    const {id}=useParams();
     const {data,isLoading,isError,error}= useQuery({
    queryKey:['post',id],//useState
    queryFn: () => FetchIndvData(id),//useEffect
  })
  if(isLoading) return <p>is Loading....</p>;
  if(isError) return <p>Error:{error.message || "Something went wrong!!!!"}</p>
console.log(data);

    return(
      <ul>
        <li>
            <p>Id:{data.id}</p>
            <p>Title:{data.title}</p>
            <p>Body:{data.body}</p>
        </li>
      </ul>
    )
}