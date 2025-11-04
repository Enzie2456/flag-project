import { useState } from "react-router-dom";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  // Funktion för att toggla mellan mörkt och ljust läge
  const toggleMode = (e) => {
    setIsDark(e.target.checked);
  };
}

  const backgroundStyle = {
    background: isDark
      ? "#28193d"
      : "#ffffff",
    color: isDark ? "#ffffff" : "#262626",
    minHeight: "100vh",
    transition: "all 0.4s ease",
  };

const textLightColor = isDark ? "#ffffff8d" : "#262626";
const textDarkColor = isDark ? "#ffffff" : "#2626268d";
const moonSrc = isDark ? "./assets/moon.svg" : "./assets/moon-bordered.svg";
const logoSrc = isDark ? "./assets/techover-logo.png" : "./assets/techover-logo-dark.png";

return (
    <div style={backgroundStyle}>
        <img className="logo" src={logoSrc} alt="Logo" width={150} />
        <h1 id="headline">{isDark ? "Dark" : "Light"}</h1>
        <header>
        <label>
          <input
            id="toggle-button"
            type="checkbox"
            checked={isDark}
            onChange={toggleMode}
          />
          Toggle Dark Mode
        </label>
      </header>

    </div>
);

export default DarkModeToggle
