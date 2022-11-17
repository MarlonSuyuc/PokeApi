import { useModal } from "../hooks/useModal";
import PokemonModal from "./PokemonModal";

const Pokemon = ({ id, name, type, image, stats }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  let color;
  switch (type) {
    case "bug":
      color = "lime-400";
      break;
    case "water":
      color = "blue-400";
      break;
    case "grass":
      color = "green-400";
      break;
    case "fire":
      color = "red-500";
      break;
    case "normal":
      color = "gray-600";
      break;
    case "fighting":
      color = "red-700";
      break;
    case "rock":
      color = "yellow-600";
      break;
    case "steel":
      color = "indigo-300";
      break;
    case "electric":
      color = "yellow-400";
      break;
    case "flying":
      color = "violet-400";
      break;
    case "psychic":
      color = "rose-400";
      break;

    case "dragon":
      color = "violet-600";
      break;
    case "ice":
      color = "cyan-300";
      break;
    case "poison":
      color = "fuchsia-700";
      break;
    case "dark":
      color = "yellow-800";
      break;
    case "ghost":
      color = "indigo-600";
      break;
    case "fairy":
      color = "pink-300";
      break;
  }

  return (
    <section>
      <article
        className={`${type} bg-${color} border border-solid border-black p-3 rounded flex flex-col-reverse justify-between items-center  shadow-sm `}
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
    </section>
  );
};

export default Pokemon;
