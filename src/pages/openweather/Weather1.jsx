import { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import WeatherCard from "./WeatherCard";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Dawa from "./Dawa";

const Weather1 = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [zip, setZip] = useState("7000");

  useEffect(() => {
    makeRequest({
      url: "https://api.openweathermap.org/data/2.5/weather",
      method: "GET",
      params: {
        zip: zip + ",dk",
        units: "metric",
        lang: "da",
        appid: import.meta.env.VITE_APP_OPENWEATHERKEY,
      },
    });
  }, [zip]);

  return (
    <section className="bg-gray-900 min-h-screen text-white py-6">
      <h1 className="text-3xl text-center font-bold mb-6">Vejret lige nu</h1>

      {isLoading && <Loader />}
      {error && <Error />}

      {!data && (
        <h2 className="text-3xl text-red-800 text-center font-bold">
          Vejret er ude af drift
        </h2>
      )}

      {/* 👇 HER ER FIXET */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 px-6">
        {/* Input */}
        <div className="w-full max-w-sm">
          <p className="text-xl font-bold">Skriv et postnummer</p>
          <Dawa setZip={setZip} />
        </div>

        {/* Card */}
        {data && (
          <div className="w-full max-w-md">
            <WeatherCard data={data} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather1;
