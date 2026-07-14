import { FaLongArrowAltRight } from "react-icons/fa";
import {NavLink} from "react-router-dom"
export const CountryCard = ({ country }) => {
  const { code, name, capital, region, population } = country;
 
  return (
    <li className="country-list">
      <div className="country-card-inner">
        <div className="country-card-front">
          <img
            className="country-img"
            src={`https://flagcdn.com/w160/${code.toLowerCase()}.png`}
            alt={`${name} flag`}
            onError={(e) => (e.target.style.display = "none")}
          />
          <h1>{name}</h1>
          {/* console.log(code); */}
        </div>

        <div className="country-card-back">
          <h1>{name}</h1>
          <p className="card-text">
            Population:{" "}
            <span className="card-value-text">
              {population.toLocaleString()}
            </span>
          </p>
          <p className="card-text">
            Region: <span className="card-value-text">{region}</span>
          </p>
          <p className="card-text">
            Capital: <span className="card-value-text">{capital}</span>
          </p>
          <NavLink to={`/country/${code}`}>
             <button className="card-btn">
            <span className="btn-text">Read More</span>
            <FaLongArrowAltRight className="right-arrow" />
          </button>
          </NavLink>
         
        </div>
      </div>
    </li>
  );
};
