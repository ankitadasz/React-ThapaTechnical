import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/PostApi";
import Loader from "../Components/Ui/Loader";
import { CountryCard } from "../Components/Ui/CountryCard";
import { SearchFilter } from "../Components/Ui/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

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
  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.toLowerCase().includes(search.toLowerCase());
    }
    return countries;
  };
  const filterRegion= (country)=>{
    if(filter==="All") return countries;
    return country.region === filter;
  }
  const filterCountry = countries.filter((country) => searchCountry(country)
&& filterRegion(country));

  return (
    <div>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="country-grid">
        {filterCountry.map((currcountry) => {
          return <CountryCard country={currcountry} key={currcountry.code} />;
        })}
      </ul>
    </div>
  );
};
