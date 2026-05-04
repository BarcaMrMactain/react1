import { Link } from "react-router";

const FilmCard = ({ film }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-black text-white">

      {/* Billede */}
      {film.image && (
        <img
          src={film.image}
          alt={film.title}
          title={film.title}
          className="w-full object-cover rounded mb-2"
        />
      )}

      <h2 className="text-xl font-bold mb-2">{film.title}</h2>

      <Link
        to="/filmsdetails"
        state={{ film }}
        className="inline-block mt-3 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Læs mere
      </Link>

    </div>
  );
};

export default FilmCard;