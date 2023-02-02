import "./actualWeather.scss";

const ActualWeather = ({ info }) => {
  return (
    <section className="actual-weather">
      <p className="actual-weather__name">{info.name}</p>
      {info.weather ? (
        <>
          <img
            src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
            alt={info.weather[0].main}
            className="actual-weather__icon"
          />
          <p className="actual-weather__description">
            {info.weather[0].main} - {info.weather[0].description}
          </p>
        </>
      ) : null}
    </section>
  );
};

export default ActualWeather;
