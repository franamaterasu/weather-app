import "./foreCastItem.scss";

const ForeCastItem = ({ info }) => {
  return (
    <article className="forecast-item">
      <img
        src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
        alt={info.weather[0].main}
      />
      <p className="forecast-item__description">{info.weather[0].main}</p>
      <p className="forecast-item__description">{info.dt_txt}</p>
    </article>
  );
};

export default ForeCastItem;
