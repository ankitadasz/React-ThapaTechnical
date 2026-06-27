import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/Ui/Card";

export const Explore = () => {
    const movieData=useLoaderData();
    console.log(movieData);
  return(
    <>
    <ul className="card-box">
        {
            movieData.results.map((movie)=>{
                return <Card key={movie.id} movie={movie}/>
            })
        }
    </ul>
    </>
  )
};
