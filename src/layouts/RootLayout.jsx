import { Outlet, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import logoDark from '../assets/techover-logo.png';
import logoLight from "../assets/techover-logo-dark.png";
import DarkModeToggles from '../components/DarkModeToggles';

const RootLayout = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-theme", isLight);
  }, [isLight]);

  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <div className="navbar-content">
            <NavLink className="nav-link-1" to="/">
              The Flag App
            </NavLink>
            <img
              src={isLight ? logoLight : logoDark}
              alt="techover-logo"
              className="techover-logo"
            />
            <div className="navbar-light-darkmode">
              <DarkModeToggles isLight={isLight} setIsLight={setIsLight} />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet context={{ isLight }} />
      </main>
    </div>
  );
};

export default RootLayout;
