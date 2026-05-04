import { useEffect } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import useRequestData from "../../hooks/useRequestData";

const Dog = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {

    makeRequest({
      url: "https://dog-api.p.rapidapi.com/list/all",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
        "x-rapidapi-host": "dog-api.p.rapidapi.com",
      },
    });
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h1 className="text-5xl font-bold text-center mb-10 text-orange-400">
        Hunderacer 🐾
      </h1>

      {isLoading && <Loader />}
      {error && <Error message="Kunne ikke hente de firbenede venner." />}

      {data && (
        <div className="max-w-4xl mx-auto">
          {/* INFO CARD */}
          <div className="bg-linear-to-br from-orange-600/40 to-black/70 p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-orange-300">
              Vidste du?
            </h2>
            <p className="text-gray-200 text-lg">
              Der findes over {Object.keys(data.message).length} forskellige hunderacer i denne database!
            </p>
            
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold transition shadow-lg"
            >
              🔄 Opdater liste
            </button>
          </div>

          {/* LISTE OVER RACER */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
            {Object.keys(data.message).map((breed) => (
              <div 
                key={breed}
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-orange-500/20 transition-colors cursor-default capitalize"
              >
                <span className="text-orange-200 font-medium">{breed}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Dog;