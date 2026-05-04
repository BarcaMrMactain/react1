const PeopleCard = ({ person }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-2">{person.name}</h2>

      <p><strong>Køn:</strong> {person.gender}</p>
      <p><strong>Alder:</strong> {person.age}</p>
      <p><strong>Øjenfarve:</strong> {person.eye_color}</p>
      <p><strong>Hårfarve:</strong> {person.hair_color}</p>
    </div>
  );
};

export default PeopleCard;