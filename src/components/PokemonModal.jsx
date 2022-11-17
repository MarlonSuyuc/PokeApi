import "./pokemonModal.css";
const handleModalContainerClick = (e) => e.stopPropagation();

const PokemonModal = ({ children, isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default PokemonModal;
