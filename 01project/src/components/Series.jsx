import seriesData from "../api/seriesData.json";
import List from "./List";
const Series = () => {
  return (
    <ul>
      {seriesData.map((curElem) => (
        <List key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
};
export default Series;
