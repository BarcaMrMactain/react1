import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import useRequestData from "../../hooks/useRequestData";
import AlbumCard from "./AlbumCard";

const Albums = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    makeRequest( { url: "https://jsonplaceholder.typicode.com/albums" } );
  }, []);

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 1;
  const paginated = data
    ? data.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [];

  const handleItemsPerPage = (val) => {
    setItemsPerPage(val);
    setPage(1);
  };

  return (
    <section>
      {" "}
      <h1 className="text-4xl text-center font-bold mb-6">
        Albums fra JSONPlaceholder
      </h1>
      {isLoading && <Loader />} {error && <Error />}{" "}
      <div className="flex items-center gap-4 mb-4">
        {" "}
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 1}
          className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg disabled:opacity-40 transition-opacity"
        >
          <FiChevronLeft size="1.2rem" /> Forrige{" "}
        </button>{" "}
        <div className="flex items-center gap-1">
          {" "}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className="rounded-full transition-all"
              style={{
                width: page === i + 1 ? "12px" : "8px",

                height: page === i + 1 ? "12px" : "8px",

                backgroundColor: page === i + 1 ? "#3b82f6" : "#cbd5e1",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages}
          className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg disabled:opacity-40 transition-opacity"
        >
          Næste <FiChevronRight size="1.2rem" />
        </button>
        <label>
          vælg antal poster:
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {paginated.map((a) => (
          <AlbumCard a={a} key={a.id} />
        ))}
      </div>
    </section>
  );
};

export default Albums;
