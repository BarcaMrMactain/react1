// import { Link } from "react-router";

const StarshipsCard = ({ s }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-black">
      <h2 className="text-xl font-bold mb-2 text-amber-300">{s.name}</h2>
      <p>
        <strong>Model:</strong> {s.model}
      </p>
      <p>
        <strong>Manufacturer:</strong> {s.manufacturer}
      </p>
      <p>
        <strong>Cost_in_credits:</strong> {s.cost_in_credits}
      </p>
      <p>
        <strong>Length:</strong> {s.length}
      </p>
      <p>
        <strong>Max_atmosphering_speed:</strong> {s.max_atmosphering_speed}
      </p>
      <p>
        <strong>Crew:</strong> {s.crew}
      </p>
      <p>
        <strong>Passengers:</strong> {s.passengers}
      </p>
      <p>
        <strong>Cargo_capacity:</strong> {s.cargo_capacity}
      </p>
      <p>
        <strong>Consumables:</strong> {s.consumables}
      </p>
      <p>
        <strong>Hyperdrive_rating:</strong> {s.hyperdrive_rating}
      </p>
      <p>
        <strong>MGLT:</strong> {s.MGLT}
      </p>
      <p>
        <strong>Starship_class:</strong> {s.starship_class}
      </p>
      <p>
        <strong>Created:</strong> {s.created}
      </p>
      <p>
        <strong>Edited:</strong> {s.edited}
      </p>
    </div>
  );
};

export default StarshipsCard;
