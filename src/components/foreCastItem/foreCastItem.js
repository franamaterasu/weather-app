const ForeCastItem = ({ info }) => {
  return (
    <article>
      <img
        src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
        alt={info.weather[0].main}
      />
      <p>{info.weather[0].main}</p>
      <p>{info.dt_txt}</p>
    </article>
  );
};

export default ForeCastItem;
