import { useState } from "react";
import SearchBar from "../../components/SearchBar";

const FlagAll = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const countries = ["Sweden", "Norway", "Finland", "Denmark"];
  const filtered = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flag-all">
      <SearchBar onSearch={setSearchTerm} />
      <ul className="country-list">
        {filtered.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlagAll;
