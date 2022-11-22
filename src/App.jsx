import { useState } from "react";
import Buttons from "./components/Buttons";
import Loader from "./components/Loader";
import Pokemon from "./components/Pokemon";
import { usePokeApi } from "./hooks/usePokeApi";

function App() {
  let { prevUrl, pokemons, loading, handleNext, handlePrev } = usePokeApi();
  const [serch, setSerch] = useState(null);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let ulrSerchPokemon = `https://pokeapi.co/api/v2/pokemon/${serch}`;
    const singlePokemon = async (url) => {
      let response = await fetch(url),
        json = await response.json();
      const POKEMON = {
        id: json.id,
        name: json.name,
        image: json.sprites.other.dream_world.front_default,
        type: json.types[0].type.name,
        stats: json.stats,
      };
      setData([POKEMON]);
    };
    singlePokemon(ulrSerchPokemon);
  };

  const handleChange = (e) => {
    setSerch(e.target.value.toLowerCase());
    setData([]);
  };

  return (
    <div>
      <h1 className="mt-3 text-center text-5xl font-bold">Poké Api</h1>
      <form
        onSubmit={handleSubmit}
        className="w-96 p-4 flex ml-auto mr-auto justify-between mt-16"
      >
        <input
          onChange={handleChange}
          type="text"
          className="border-2 border-solid border-black  outline-none w-3/4 pl-2 rounded font-medium"
        />
        <button className="border-2 border-solid border-black px-4 py-1 rounded font-medium">
          Buscar
        </button>
      </form>
      {serch === null ? (
        <div>
          <div className=" w-11/12 ml-auto mr-auto mt-8 mb-4">
            <Buttons
              handleNext={handleNext}
              handlePrev={handlePrev}
              prevUrl={prevUrl}
            />
          </div>
          <div className="w-11/12 ml-auto mr-auto pt-2  pb-10  grid gap-4 justify-items-center items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {loading ? (
              <Loader />
            ) : (
              pokemons.map(({ id, name, type, image, stats }) => (
                <Pokemon
                  key={id}
                  id={id}
                  name={name}
                  type={type}
                  image={image}
                  stats={stats}
                />
              ))
            )}
          </div>
        </div>
      ) : (
        data.map(({ id, name, type, image, stats }) => (
          <Pokemon
            key={id}
            id={id}
            name={name}
            type={type}
            image={image}
            stats={stats}
          />
        ))
      )}
    </div>
  );
}

export default App;
