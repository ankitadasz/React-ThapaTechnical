import { useEffect, useState } from "react";
import "./Pokemon.css";
import PokemonCard from "./PokemonCard";
const Pokemon = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

  //   const fetchPokemon = () => {
  //     fetch(API)
  //       .then((res) => res.json())
  //       .then((data) => {setApiData(data)
  //         setLoading(false)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(error)
  //         setLoading(false)
  //       });
  //   };

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setApiData(data);
      setLoading(false);

      const pokemonData = data.results.map(async (currPokemons) => {
        const res = await fetch(currPokemons.url);
        const data = await res.json();
        return data;
      });

      const detailedResponse = await Promise.all(pokemonData);

      setPokemon(detailedResponse);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("Pokemon state updated");
    console.log(pokemon);
  }, [pokemon]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  //search
  const searchContain = pokemon.filter((searchPokemon) =>
    searchPokemon.name.toLowerCase().includes(input.toLowerCase())
  );

  console.log(apiData);
  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error:{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section>
        <header>
          <h1>Lets Catch Pokémon </h1>
          <p>🔥 Gotta Catch ’Em All</p>
        </header>
        <div className="pokemon-search">
          <input
          className="input-field"
            type="text"
            placeholder="Search Pokemon"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <ul className="cards">
          {searchContain.map((currPokemons) => {
            return (
              <PokemonCard key={currPokemons.id} pokemonDetail={currPokemons} />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Pokemon;
