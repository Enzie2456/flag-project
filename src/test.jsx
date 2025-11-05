import { useState } from "react";
import App from "./App";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Sök efter ett land..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Sök
      </button>
    </form>
  );
};

export default SearchBar;





App

import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// Pages
import FlagAll from './pages/FlagAll/FlagAll'
import FlagDetail from './pages/FlagDetail'
import NotFound from './pages/NotFound'
import FlagError from './pages/FlagAll/FlagError'

// Layouts
import RootLayout from './layouts/RootLayout'
import SearchFlagLayout from './layouts/SearchFlagLayout'
import RegionFilterLayout from './layouts/RegionFilterLayout'

// Components
import SearchBar from './components/SearchBar'


const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        
        <Route 
        
            index 
            element={<FlagAll />} 
            errorElement={<FlagError />} 
        />
        
        <Route 
             
            element={<FlagDetail />} 
        />

        <Route path="searchflag" element={<SearchFlagLayout />}>
            <Route path="regionfilter" element={<RegionFilterLayout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Route>
)


const router = createBrowserRouter(routesFromElements)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App