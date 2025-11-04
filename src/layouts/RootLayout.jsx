import { Outlet, NavLink } from 'react-router-dom'
import logo from '../assets/techover-logo.png'
import moon from '../assets/moon.svg'

// Components



const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <div className="navbar-content">
                        <NavLink className="nav-link-1" to="/">
                            The  Flag  App
                        </NavLink>
                        <img src={logo} alt="techover-logo" className="techover-logo" />
                        <div className="navbar-light-darkmode">
                           
                            <img src={moon} alt="moon-logo" className="moon-logo" /> 
                            <NavLink className="nav-link-2" to="light-mode">
                                Dark Mode
                            </NavLink>
                        </div>
                    </div> 
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout