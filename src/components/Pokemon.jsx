import { useModal } from "../hooks/useModal";
import PokemonModal from "./PokemonModal";

const Pokemon = ({ id, name, type, image, stats }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

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
    <div className="w-full flex justify-center">
      <article
        className={`${type} ${color} border border-solid border-black p-3 rounded flex flex-col-reverse justify-between items-center  shadow-sm min-w-6/10 max-w-3/10`}
      >
        <p className="text-center text-xl font-semibold">
          {id} {name}
        </p>
        <figure>
          <img
            onClick={openModal}
            data-name={name}
            src={image}
            alt={name}
            className="w-44 h-44 cursor-pointer"
          />
        </figure>
      </article>

      <PokemonModal isOpen={isOpenModal} closeModal={closeModal}>
        <h3 className="text-center text-3xl font-bold">
          {id} - {name}
        </h3>
        <p className="font-semibold text-xl ">Tipo:</p>
        <p>{type}</p>
        <p className="font-semibold text-xl">Estadísticas:</p>
        {stats.map((item) => (
          <ul key={item.stat.name}>
            <li className="font-semibold">{item.stat.name}</li>
            <li>{item.base_stat}</li>
          </ul>
        ))}
      </PokemonModal>
    </div>
  );
};

export default Pokemon;
