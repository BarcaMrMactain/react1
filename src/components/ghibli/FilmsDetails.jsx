import React from "react";
import { useLocation, Link, Navigate } from "react-router";

const FilmsDetails = () => {
  const location = useLocation();

  // Hvis man går direkte ind på siden
  if (!location.state?.film) {
    return <Navigate to="/films" replace />;
  }

  const { film } = location.state;

  return (
    <div className="border rounded-xl p-4 shadow-md m-10 bg-black text-white">
      <h1 className="text-3xl font-bold text-amber-300">{film.title}</h1>

      <p>
        <strong className="text-amber-300">Beskrivelse:</strong> {film.description}
      </p>

      <p>
        <strong className="text-amber-300">Instruktør:</strong> {film.director}
      </p>

      <p>
        <strong className="text-amber-300">Producer:</strong> {film.producer}
      </p>

      <p>
        <strong className="text-amber-300">Udgivelsesår:</strong> {film.release_date}
      </p>

      <p>
        <strong className="text-amber-300">Rating:</strong> {film.rt_score}
      </p>

      <p>
        <strong className="text-amber-300">Spilletid:</strong> {film.running_time} min
      </p>

      {/* Billede (hvis API har det) */}
      {film.image && (
        <img
          src={film.image}
          alt={film.title}
          className="mt-4 w-64 rounded"
        />
      )}

      <br />

      <Link to="/films">Tilbage</Link>
    </div>
  );
};

export default FilmsDetails;