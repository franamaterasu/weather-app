import { useState } from "react";
import ActualWeather from "./components/actualWeather";
import ForeCastList from "./components/forecastList";

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
      <input
        type="text"
        value={searchValue}
        placeholder="Inserta la ciudad"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={searchLocation}
      />
      <ActualWeather info={weatherInfo} forecast={forecastInfo} />
      <ForeCastList forecast={forecastInfo} />
    </main>
  );
};

export default App;
