import { NavLink, Outlet } from "react-router-dom"

const SearchFlagLayout = () => {
    return (
        <div className="searchflag-layout">
            <h2>Vilken flagga söker du?</h2>

            <nav className="searchflag-layout__nav">
                <NavLink className="searchflag-layout__nav__link" to="flagdetail">
                    Search flag
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default SearchFlagLayout