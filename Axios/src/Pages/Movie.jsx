import { useEffect, useState } from "react";
import { Card } from "./Card";
import { getMovie } from "../Services/GetServices";
export const Movie = () => {
    const [data,setdata] = useState([])
  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=f7a0f76&s=Titanic&page=1";

  const getMovieData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data.Search);
      setdata(res.data.Search);
    } catch (error) {
      console.log("Error message",error.message);
      console.log("Error status",error.response.status);
      console.log("Error data",error.response.data);

    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return <ul>
    {
        data.map((movie)=>{
            return <Card key={movie.imdbID} movieData={movie}/>
        })

    }
  </ul>;
};
