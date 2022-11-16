import { useModal } from "../hooks/useModal";
import PokemonModal from "./PokemonModal";

const Pokemon = ({ id, name, type, image, abilities }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  let color;
  switch (type) {
    case "bug":
      color = "bg-lime-400";
      break;
    case "water":
      color = "bg-blue-400";
      break;
    case "grass":
      color = "bg-green-400";
      break;
    case "fire":
      color = "bg-red-500";
      break;
    case "normal":
      color = "bg-gray-600";
      break;
    case "fighting":
      color = "bg-red-700";
      break;
    case "rock":
      color = "bg-yellow-600";
      break;
    case "steel":
      color = "bg-indigo-300";
      break;
    case "electric":
      color = "bg-yellow-400";
      break;
    case "flying":
      color = "bg-violet-400";
      break;
    case "psychic":
      color = "bg-rose-400";
      break;

    case "dragon":
      color = "bg-violet-600";
      break;
    case "ice":
      color = "bg-cyan-300";
      break;
    case "poison":
      color = "bg-fuchsia-700";
      break;
    case "dark":
      color = "bg-yellow-800";
      break;
    case "ghost":
      color = "bg-indigo-600";
      break;
    case "fairy":
      color = "bg-pink-300";
      break;
  }

  return (
    <section>
      <article
        className={`${type} ${color} border border-solid border-black p-3 rounded flex flex-col-reverse justify-between items-center shadow-sm`}
      >
        <p className="text-center text-xl font-semibold">
          {id} {name}
        </p>
        <figure>
          <img
            onClick={openModal1}
            data-name={name}
            src={image}
            alt={name}
            className="w-44 h-44 cursor-pointer"
          />
        </figure>
      </article>

      <PokemonModal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Name:{name}</h3>
        <p>Habilidades:</p>
        <ol>
          {abilities.map((abi) => (
            <li key={abi.ability.name}>-{abi.ability.name}</li>
          ))}
        </ol>
        <img src={image} alt="Animals" />
      </PokemonModal>
    </section>
  );
};

export default Pokemon;
