import ForeCastItem from "../foreCastItem";

const ForeCastList = ({ forecast }) => {
  const date = new Date().toISOString().split("T")[0];

  const list =
    forecast.filter &&
    forecast.filter((item) => {
      console.log(item);
      return item.dt_txt.slice(0, 10) === date;
    });

  return (
    list &&
    list.map((item) =>
      item.weather ? <ForeCastItem key={item.dt_txt} info={item} /> : null
    )
  );
};

export default ForeCastList;
