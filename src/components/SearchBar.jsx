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
      placeholder="Search for a country..."
      value={query}
      onChange={handleChange}
      className="search-input"
    />
  );
};

export default SearchBar;
