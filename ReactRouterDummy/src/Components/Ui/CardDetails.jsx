import { NavLink, useLoaderData } from "react-router-dom";
import "./Card.css";

export const CardDetails = () => {
  const movie = useLoaderData();

  return (
    <div className="details-container">
      <div className="details-card">
        <img
          className="details-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <h1 className="details-title">{movie.title}</h1>
        <h2 className="details-text">Release: {movie.release_date}</h2>
        <h3 className="details-text">Popularity: {movie.popularity}</h3>
        <h4 className="details-text">Rating: {movie.vote_average}</h4>
        <p className="details-overview">{movie.overview}</p>

        <NavLink to="/explore" className="back-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  );
};