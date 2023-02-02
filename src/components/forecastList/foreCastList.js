const ForeCastList = ({ forecast }) => {
  const date = new Date().toISOString().split("T")[0];

  const list =
    forecast.filter &&
    forecast.filter((item) => {
      return item.dt_txt.slice(0, 10) === date;
    });

  return list && list.map((item) => <p>{item.dt_txt}</p>);
};

export default ForeCastList;
