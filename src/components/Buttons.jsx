const Buttons = ({ handleNext, handlePrev, prevUrl }) => {
  return (
    <div className="flex justify-center">
      {prevUrl && (
        <button
          onClick={handlePrev}
          className="mx-4 bg-slate-900 text-gray-50 py-2 px-4 rounded-md "
        >
          PrevPag
        </button>
      )}

      <button
        onClick={handleNext}
        className="mx-4 bg-slate-900 text-gray-50 py-2 px-4 rounded-md"
      >
        NextPag
      </button>
    </div>
  );
};

export default Buttons;
