import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">🎬 Movie Explorer</h1>

        <p className="home-subtitle">
          Discover trending, top-rated, and popular movies in one place.
        </p>

        <div className="home-buttons">
          <NavLink to="/explore" className="btn explore">
            Explore Movies
          </NavLink>

          <NavLink to="/trending" className="btn trending">
            Trending
          </NavLink>
        </div>
      </div>
    </div>
  );
};
