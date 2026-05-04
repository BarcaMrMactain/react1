import { useState } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import useRequestData from "../../hooks/useRequestData";

const LoveCalc = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [randomPercent, setRandomPercent] = useState(0);

  const getLoveMessage = (percent) => {
    if (percent >= 90) return "Perfekt Match! I er skabt for hinanden! 💍";
    if (percent >= 70) return "Gode venner... og måske mere? 😏";
    if (percent >= 50) return "Der er potentiale, men det kræver arbejde! ☕";
    if (percent >= 30) return "Måske skulle I bare nøjes med at sige hej... 👋";
    return "Løb! Find en anden med det samme! 🏃💨";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name1.trim() || !name2.trim()) return;

    const newRandom = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    setRandomPercent(newRandom);

    makeRequest({
      url: "https://love-o-meter.p.rapidapi.com/getmatch",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_APP_RAPIDAPIKEY,
        "x-rapidapi-host": "love-o-meter.p.rapidapi.com",
      },
      params: { firstname: name1, secondname: name2 },
    });
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h1 className="text-5xl font-bold text-center mb-10 text-pink-500">Kærligheds-måler ❤️</h1>

      {/* INPUT FORM */}
      <div className="max-w-xl w-full mx-auto bg-linear-to-br from-pink-600/30 to-black/70 p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md mb-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Navn 1"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-pink-500 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Navn 2"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-pink-500 outline-none"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50"
          >
            {isLoading ? "Beregner..." : "Beregn Match 💘"}
          </button>
        </form>
      </div>

      {isLoading && <Loader />}
      {error && <Error />}

      {/* RESULTAT CARD */}
      {data && !isLoading && (
        <div className="max-w-xl w-full mx-auto bg-linear-to-br from-pink-600/70 to-black/70 p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md text-center">
          <h2 className="text-4xl font-bold mb-4 text-pink-300">
            {data.firstname} & {data.secondname}
          </h2>

          <div className="text-7xl font-black text-white mb-2 drop-shadow-lg">
            {randomPercent}%
          </div>

          <p className="text-2xl text-yellow-300 font-bold mb-6">
            {getLoveMessage(randomPercent)}
          </p>

          <div className="w-full h-5 bg-black/40 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-linear-to-r from-pink-500 to-red-500 transition-all duration-1500 ease-out"
              style={{ width: `${randomPercent}%` }}
            ></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoveCalc;