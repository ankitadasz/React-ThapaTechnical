import { NavLink } from "react-router-dom"

export const Header = () =>{
    return(
       <section>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/trad">FetchOld</NavLink>
            <NavLink to="/rq">FetchRQ</NavLink>
            <NavLink to="/infinite">InfiniteScroll</NavLink>


        </section>
    )

}
