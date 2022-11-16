import Buttons from "./components/Buttons";
import Loader from "./components/Loader";
import Pokemon from "./components/Pokemon";
import { usePokeApi } from "./hooks/usePokeApi";

function App() {
  let { prevUrl, pokemons, loading, handleNext, handlePrev } = usePokeApi();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
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
      <div className=" w-11/12 ml-auto mr-auto mt-8 mb-4">
        <Buttons
          handleNext={handleNext}
          handlePrev={handlePrev}
          prevUrl={prevUrl}
        />
      </div>
      <div className="w-11/12 ml-auto mr-auto pt-2  pb-10  grid gap-4 justify-items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {loading ? (
          <Loader />
        ) : (
          pokemons.map(({ id, name, type, image, abilities }) => (
            <Pokemon
              key={id}
              id={id}
              name={name}
              type={type}
              image={image}
              abilities={abilities}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
