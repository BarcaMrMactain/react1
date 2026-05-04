const WeatherCard = ({ data }) => {
  return (
    <div className="max-w-md p-6 mx-auto text-white border bg-linear-to-br from-accent/80 to-black/50 rounded-2xl backdrop-blur-md border-white/20">
      <h2 className="my-3 text-3xl font-extrabold text-center">
        Vejret i <span className="text-yellow-300">{data.name}</span>
        <br />
        lige nu
      </h2>

      <div className="flex flex-col items-center justify-center my-6 space-y-3">
        {/* ikon */}
        {/* <img src={ "https://openweathermap.org/payload/api/media/file/" + data.weather[0].icon +"png" } alt=""/> */}

        <img
          src={`https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`}
          alt=""
        />

        <p className="text-lg capitalize mb-2">{data.weather[0].description}</p>
      </div>

      <div className="my-10 space-y-2 text-lg font-semibold">
        <p>{Math.round(data.main.temp)}°C</p>

        <p>🌬 Vind:{Math.round(data.wind.speed)} m/s</p>

        <p>Vindretning:{data.wind.deg}&deg;</p>
      </div>
      <div className="pt-8 my-10 space-y-2 text-2xl border-t border-white/30 text-white/90">
        <p>
          🌞 sol står op: kl.{" "}
          {new Date(data.sys.sunrise * 1000).toLocaleTimeString("da-Dk", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p>
          😴 sol går ned: kl.{" "}
          {new Date(data.sys.sunset * 1000).toLocaleTimeString("da-Dk", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
