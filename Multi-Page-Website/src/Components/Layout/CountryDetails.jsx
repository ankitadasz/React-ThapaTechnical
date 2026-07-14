import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom"
import { getCountryIndData } from "../../Api/PostApi";
import Loader from "../Ui/Loader";

export const CountryDetails = () =>{
      const [isPending, startTransition] = useTransition();
      const [country, setCountry] = useState(null);
    const {code}=useParams();
     useEffect(() => {
       const fetchData = async () => {
         try {
           const res = await getCountryIndData(code);
           console.log(res);
           console.log(res.data);
   
           startTransition(() => {
             setCountry(res.data);
           });
         } catch (err) {
           console.error("Failed to fetch countries:", err);
         }
       };
       fetchData();
     }, [code]);
   if (!country) {
  return <Loader/>
}

return (
  <section className="country-details-section">
    <div className="country-details-card">

      <div className="country-header">
        <img
          className="country-details-flag"
          src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
          alt={`${country.name} flag`}
        />

        <h1 className="country-name">{country.name}</h1>
      </div>

      <div className="country-info">

        <p className="country-info-item">
          <span className="info-title">Official Code:</span>
          <span className="info-value">{country.code}</span>
        </p>

        <p className="country-info-item">
          <span className="info-title">Alpha-3 Code:</span>
          <span className="info-value">{country.alpha3Code}</span>
        </p>

        <p className="country-info-item">
          <span className="info-title">Capital:</span>
          <span className="info-value">{country.capital}</span>
        </p>

        <p className="country-info-item">
          <span className="info-title">Region:</span>
          <span className="info-value">{country.region}</span>
        </p>

        <p className="country-info-item">
          <span className="info-title">Sub Region:</span>
          <span className="info-value">{country.subregion}</span>
        </p>

        <p className="country-info-item">
          <span className="info-title">Population:</span>
          <span className="info-value">
            {country.population.toLocaleString()}
          </span>
        </p>

        <p className="country-info-item">
          <span className="info-title">Currency:</span>
          <span className="info-value">{country.currency}</span>
        </p>

        <p className="country-info-item">
          <span className="info-title">Calling Code:</span>
          <span className="info-value">{country.callingCode}</span>
        </p>

        <p className="country-info-item">
          <span className="info-title">Languages:</span>
          <span className="info-value">
            {country.languages.join(", ")}
          </span>
        </p>

      </div>
    </div>
  </section>
);
}