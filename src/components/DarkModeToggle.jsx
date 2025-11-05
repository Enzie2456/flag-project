import { useState } from "react";

//
import moon from "../assets/moon.svg";
import moonBordered from "../assets/moon-bordered.svg";
import logoLight from "../assets/techover-logo-dark.png";
import logoDark from "../assets/techover-logo.png";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = (e) => {
    setIsDark(e.target.checked);
  };

  const backgroundStyle = {
    background: isDark ? "#28193d" : "#ffffff",
    color: isDark ? "#ffffff" : "#262626",
    minHeight: "100vh",
    transition: "all 0.4s ease",
  };

  const textLightColor = isDark ? "#ffffff8d" : "#262626";
  const textDarkColor = isDark ? "#ffffff" : "#2626268d";
  const moonSrc = isDark ? moon : moonBordered;
  const logoSrc = isDark ? logoDark : logoLight;

  return (
    <div style={backgroundStyle}>
      <img className="logo" src={logoSrc} alt="Logo" width={150} />
      <h1 id="headline" style={{ color: textDarkColor }}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </h1>
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
        <img src={moonSrc} alt="Moon icon" width={40} />
      </header>
    </div>
  );
}

export default DarkModeToggle;

