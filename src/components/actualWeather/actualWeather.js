const ActualWeather = ({ info }) => {
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
    </section>
  );
};

export default ActualWeather;
