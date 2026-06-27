import { NavLink } from "react-router-dom";
import "./Card.css";

export const Card = ({ movie }) => {
  const { poster_path, id, title } = movie;

  return (
    <div className="card">
      <img
        className="card-img"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />

      <h3 className="card-title">{title}</h3>

      <NavLink to={`/explore/${id}`} className="card-btn">
        <button>Watch Review</button>
      </NavLink>
    </div>
  );
};