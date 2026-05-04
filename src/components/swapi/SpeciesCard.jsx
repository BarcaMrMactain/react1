import { Link } from "react-router";

const SpeciesCard = ({ s }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-black">
      <h2 className="text-xl font-bold mb-2 text-amber-300">{s.name}</h2>

      {/* <Link to="/speciesdetails" state={( species: s )}> Læs mere om {s.name} </Link> */}
      <Link to={"/speciesdetails"} state={{ species: s }}>Læs mere</Link>

     
    </div>
  );
};

export default SpeciesCard;