import { useEffect } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import useRequestData from "../../hooks/useRequestData";

const Hobbies = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest({
      url: "https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
        "x-rapidapi-host": "hobbies-by-api-ninjas.p.rapidapi.com",
      },
    });
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-white py-10 px-4">
      {/* Titel */}
      <h1 className="text-5xl font-bold text-center mb-10">Find en ny hobby</h1>

      {isLoading && <Loader />}
      {error && <Error />}

      {/* Card */}
      {data && (
        <div
          className="max-w-xl w-full mx-auto 
          bg-linear-to-br from-purple-600/70 to-black/70 
          p-8 rounded-2xl shadow-2xl 
          border border-white/20 backdrop-blur-md text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-300 animate-pulse">
            {data.hobby}
          </h2>

          <p className="text-gray-200 mb-8 text-lg">
            Klar til at prøve noget nyt? <br />
            Klik på Læs mere knappen, for at læse mere om hobbien er noget for dig
          </p>

          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg text-black bg-yellow-300 hover:bg-yellow-500 
            rounded-lg font-semibold transition"
          >
            Læs mere 🔗
          </a>

          <button
            onClick={() =>
              makeRequest({
                url: "https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies",
                headers: {
                  "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
                  "x-rapidapi-host": "hobbies-by-api-ninjas.p.rapidapi.com",
                },
              })
            }
            className="block mx-auto m-6 px-4 py-2 cursor-pointer text-black bg-yellow-300 hover:bg-yellow-500 rounded-lg"
          >
            🔄 Ny hobby
          </button>
        </div>
      )}
    </section>
  );
};

export default Hobbies;
