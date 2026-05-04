import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import useRequestData from "../../hooks/useRequestData";
import SpeciesCard from "./SpeciesCard";

const Species = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest({url:"https://swapi.py4e.com/api/species"});
  }, []);

  return (
    <section>
      <h1 className="text-4xl text-center font-bold mb-6">Species fra SWAPI</h1>

      {isLoading && <Loader />}

      {error && <Error />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 m-2">
        {data &&
          data.results.map((s) => (
            <SpeciesCard key={s.name} s={s} />
          ))}
      </div>
    </section>
  );
};

export default Species;
