import moonBordered from "../assets/moon-bordered.svg";
import moon from "../assets/moon.svg";

const DarkModeToggles = ({ isLight, setIsLight }) => {
  return (
    <button
      onClick={() => setIsLight(!isLight)}
      className="toggle-button"
    >
      <img
        src={isLight ? moonBordered : moon}
        alt={isLight ? "moon bordered icon" : "moon icon"}
        className="toggle-icon"
      />
      <span className="toggle-text">
        {isLight ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default DarkModeToggles;
