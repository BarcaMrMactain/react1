import { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import FilmCard from "./FilmsCard";
import Loader from "../../components/Loader";
import Error from "../Error";

const Films = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest( { url: "https://ghibliapi.vercel.app/films" } );
  }, []);

  return (
    <section>
      <h1 className="text-4xl text-center font-bold mb-6">Films fra Ghibli</h1>

      {isLoading && <Loader />}

      {error && <Error />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 m-2">
        {data && 
        data.map((film) => 
        <FilmCard key={film.id} film={film} />)}
      </div>
    </section>
  );
};

export default Films;
