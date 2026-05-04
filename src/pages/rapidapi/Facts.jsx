import { useEffect } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import useRequestData from "../../hooks/useRequestData";

const Facts = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest({
      url: "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
        "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com",
      },
    });
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h1 className="text-5xl font-bold text-center mb-10">Her er et fact til dig 😁</h1>

      {isLoading && <Loader />}
      {error && <Error />}

      {data && (
        <div
          className="max-w-xl w-full mx-auto 
          bg-linear-to-br from-purple-600/70 to-black/70 
          p-8 rounded-2xl shadow-2xl 
          border border-white/20 backdrop-blur-md text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-green-400">
            {data && data[0]?.fact}
          </h2>

          <button
            onClick={() =>
              makeRequest({
                url: "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts",
                headers: {
                  "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
                  "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com",
                },
              })
            }
            className="block mx-auto mb-6 px-4 py-2  bg-green-500 hover:bg-green-700 rounded-lg"
          >
            🔄 Nyt fact
          </button>
        </div>
      )}
    </section>
  );
};

export default Facts;
