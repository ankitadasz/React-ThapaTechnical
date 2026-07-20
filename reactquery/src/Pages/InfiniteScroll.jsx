import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchUsers } from "../Api/api"

export const InfiniteScroll = () =>{
   const {data}= useInfiniteQuery({
        queryKey:["users"],
        queryFn:fetchUsers,
         initialPageParam: 1,
        getNextPageParam:(lastPage,allPages)=>{
            console.log("lastpage",lastPage);
            console.log("allpages",allPages);
            return lastPage.length === 10 ? allPages.length +1 : undefined;

        }
    })
    console.log(data);
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