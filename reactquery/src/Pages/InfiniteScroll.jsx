import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../Api/api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage,isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log("lastpage", lastPage);
      console.log("allpages", allPages);
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  // const handleScroll=()=>{
  //     const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight-1;
  // if(bottom && hasNextPage){
  //     fetchNextPage();
  // }
  // }

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    // window.addEventListener('scroll',handleScroll);
    // return () => window.removeEventListener("scroll",handleScroll)
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

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
      <div ref={ref}>{
      isFetchingNextPage
      ?"loading More..."
      : hasNextPage
      ?"scrolldown"
      :"no more users"

        
        }</div>
    </div>
  );
};
