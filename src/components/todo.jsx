import { useEffect, useState } from "react";

export const usePokeApi = () => {
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPokemon = async (url) => {
      setLoading(true);
      let res = await fetch(url),
        json = await res.json();
      let { results, next, previous } = json;

      results.map(async (item) => {
        let res = await fetch(item.url),
          pokemon = await res.json();

        const POKEMON = {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          type: pokemon.types[0].type.name,
          abilities: pokemon.abilities,
        };

        setPokemons(function infoPokemon(pokemons) {
          pokemons.sort((a, b) => (a.id > b.id ? 1 : -1));
          pokemons = [...pokemons, POKEMON];
          return pokemons;
        });
        setLoading(false);
      });
    };
    getPokemon(url);
  }, [url]);
  return { pokemons, loading };
};
