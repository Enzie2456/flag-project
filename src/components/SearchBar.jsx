import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim()); // skickar upp söktermen direkt
  };

  return (
    <input
      type="text"
      placeholder="Sök efter ett land..."
      value={query}
      onChange={handleChange}
      className="search-input"
    />
  );
};

export default SearchBar;
