import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import useRequestData from "../../hooks/useRequestData";
import StarshipsCard from "./StarshipsCard";

const Starships = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  const [showPage, setShowPage] = useState(1);

  useEffect(() => {
    makeRequest({url:"https://swapi.py4e.com/api/starships/?page=" + showPage});
  }, [ showPage ] );

  return (
    <section>
      <h1 className="text-4xl text-center font-bold mb-6">Starships fra SWAPI</h1>

      <button
          onClick={ () => setShowPage( showPage - 1 ) }
          disabled={ !data?.previous || isLoading }
          className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold text-white rounded bg-gray-500 hover:bg-gray-700"
        >
          ◀️ PREVIOUS
        </button>

        <button
          onClick={ () => setShowPage( showPage + 1 ) }
          disabled={ !data?.next || isLoading }
          className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold text-white rounded bg-gray-500 hover:bg-gray-700"
        >
          NEXT ▶️
        </button>

      {isLoading && <Loader />}

      {error && <Error />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 m-2">
        {data &&
          data.results.map((s) => (
            <StarshipsCard key={s.name} s={s} />
          ))}
      </div>
    </section>
  );
};

export default Starships;
