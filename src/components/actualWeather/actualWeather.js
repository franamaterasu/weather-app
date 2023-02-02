const ActualWeather = ({ info, forecast }) => {
  return (
    <section>
      <p>{info.name}</p>
      {info.weather ? (
        <>
          <img
            src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
            alt={info.weather[0].main}
          />
          <p>{info.weather[0].main}</p>
          <p>{info.weather[0].description}</p>
        </>
      ) : null}
      <br />
      {forecast.list
        ? forecast.list.map((item) => {
            return <p key={item.dt}>{item.dt_txt}</p>;
          })
        : null}
    </section>
  );
};

export default ActualWeather;
