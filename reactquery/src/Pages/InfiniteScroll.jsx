import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchUsers } from "../Api/api"
import { useEffect } from "react";

export const InfiniteScroll = () =>{
   const {data,hasNextPage,fetchNextPage}= useInfiniteQuery({
        queryKey:["users"],
        queryFn:fetchUsers,
         initialPageParam: 1,
        getNextPageParam:(lastPage,allPages)=>{
            console.log("lastpage",lastPage);
            console.log("allpages",allPages);
            return lastPage.length === 10 ? allPages.length +1 : undefined;

        }
    })

    const handleScroll=()=>{
        const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight-1;
        if(bottom && hasNextPage){
            fetchNextPage();
        }
    }
    console.log(data);
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
    },[hasNextPage])



      return (
    <div className="container">
      <h1>GitHub Users</h1>

      <div className="user-grid">
        {data?.pages.map((page, pageIndex) =>
          page.map((user) => (
            <div className="card" key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <h3>{user.login}</h3>
              <p>ID: {user.id}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};