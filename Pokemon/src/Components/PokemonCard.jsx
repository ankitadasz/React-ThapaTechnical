const PokemonCard = ({ pokemonDetail }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-img"
          src={pokemonDetail.sprites.other.dream_world.front_default}
          alt={pokemonDetail.name}
        />
      </figure>
      <p className="pokemon-name">{pokemonDetail.name}</p>
      <p className="pokemon-type">
        {pokemonDetail.types.map((arr) => arr.type.name).join(", ")}
      </p>
      <div className="grid-three-col">
        <p className="pok-info">
          <span>Height:</span> {pokemonDetail.height}
        </p>
        <p className="pok-info">
          <span>Weight:</span> {pokemonDetail.weight}
        </p>
        <p className="pok-info">
          <span>Speed:</span> {pokemonDetail.stats[5].base_stat}
        </p>
        <p className="pok-info">
          <span>Ability:</span>{" "}
          {pokemonDetail.abilities[0].ability.name}
        </p>
        <p className="pok-info">
          <span>Experience:</span> {pokemonDetail.base_experience}
        </p>
        <p className="pok-info">
          <span>Attack:</span> {pokemonDetail.stats[1].base_stat}
        </p>
      </div>
    </li>
  );
};
export default PokemonCard;
