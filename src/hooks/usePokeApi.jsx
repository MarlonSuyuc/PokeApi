import { useEffect, useState } from "react";

let incialUrl = `https://pokeapi.co/api/v2/pokemon/`;
export const usePokeApi = () => {
  const [url, setUrl] = useState(incialUrl);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [serch, setSerch] = useState("");

  const handleNext = () => {
    setPokemons([]);
    setUrl(nextUrl);
  };
  const handlePrev = () => {
    setPokemons([]);
    setUrl(prevUrl);
  };

  const pokeFun = async () => {
    setLoading(true);
    let res = await fetch(url),
      json = await res.json();
    let { results, next, previous } = json;
    setNextUrl(next);
    setPrevUrl(previous);
    getPokemon(results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
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

  useEffect(() => {
    pokeFun();
  }, [url]);
  return { pokemons, loading, handleNext, handlePrev, prevUrl };
};
