import React from "react";
import { useLocation, Link, Navigate } from "react-router";

const SpeciesDetails = () => {
  const location = useLocation();

  if (!location.state?.species) {
    return <Navigate to="/species" replace />;
  }

  const { species } = location.state;

  return (
    <div>
      <h1 className="text-3xl">{species.name}</h1>
      <p>
        <strong>Klassifikation:</strong> {species.classification}
      </p>
      <p>
        <strong>Designation:</strong> {species.designation}
      </p>
      <p>
        <strong>Gennemsnitlig højde:</strong> {species.average_height}
      </p>
      <p>
        <strong>Levetid:</strong> {species.average_lifespan}
      </p>
      <p>
        <strong>Sprog:</strong> {species.language}
      </p>
      <Link to={"/species"}>Tilbage</Link>
    </div>
  );
};

export default SpeciesDetails;
