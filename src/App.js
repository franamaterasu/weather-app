import { useState } from "react";
import ActualWeather from "./components/actualWeather";
import ForeCastList from "./components/forecastList";

import "./app.scss";

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [forecastInfo, setForecastInfo] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=7a68b98b464faf27752d6128b275674a`;
  const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=7a68b98b464faf27752d6128b275674a`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      fetch(URL_WEATHER).then((res) =>
        res.json().then((res) => {
          setWeatherInfo(res);
        })
      );

      fetch(URL_FORECAST).then((res) =>
        res.json().then((res) => {
          setForecastInfo(res.list);
        })
      );

      setSearchValue("");
    }
  };

  return (
    <main className="main">
      <section className="main__search">
        <input
          className="main__input"
          type="text"
          value={searchValue}
          placeholder="Inserta la ciudad"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={searchLocation}
        />
      </section>
      {!weatherInfo || !forecastInfo ? (
        "No existen resultados"
      ) : (
        <section className="main__info">
          <section className="main__weather">
            <ActualWeather info={weatherInfo} forecast={forecastInfo} />
          </section>
          <section className="main__forecast">
            <ForeCastList forecast={forecastInfo} />
          </section>
        </section>
      )}
    </main>
  );
};

export default App;
