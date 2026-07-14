import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/PostApi";
import Loader from "../Components/Ui/Loader";
import { CountryCard } from "../Components/Ui/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        console.log(res);
        console.log(res.data);

        startTransition(() => {
          setCountries(res.data);
        });
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        setError("Failed to load countries.");
      }
    };
    fetchData();
  }, []);

  if (error) return <h1>{error}</h1>;
  if (isPending)
    return (
      <h1>
        <Loader />
      </h1>
    );

  return (
    <div>
      <ul className="country-grid">
        {countries.map((currcountry) => {
          return <CountryCard country={currcountry} key={currcountry.code} />;
        })}
      </ul>
    
    </div>
  );
};
