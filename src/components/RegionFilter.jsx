import arrowDownLight from "../assets/arrow-down-light.svg";
import arrowDownDark from "../assets/arrow-down-dark.svg";

const RegionFilter = ({ onSelectRegion, isLight }) => {
  const handleChange = (e) => {
    onSelectRegion(e.target.value);
  };

  return (
    <div className="region-filter-container">
      <select className="region-filter" onChange={handleChange} defaultValue="">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>

      <img
        src={isLight ? arrowDownDark : arrowDownLight}
        alt="arrow down"
        className="region-filter-arrow"
      />
    </div>
  );
};

export default RegionFilter;

