import { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import PeopleCard from "./PeopleCard";
import Loader from "../../components/Loader";

const People = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest( { url: "https://ghibliapi.vercel.app/people" } );
  }, []);

  return (
    <section>
      <h1 className="text-4xl text-center font-bold mb-6">
        Ghibli Characters
      </h1>      

      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data &&
          data.map((person) => (
            <PeopleCard key={person.id} person={person} />
          ))}
      </div>
    </section>
  );
};

export default People;