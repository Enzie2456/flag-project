import { useState } from "react";
import SearchBar from "../../components/SearchBar";

const FlagAll = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Exempeldata – ersätt med dina riktiga flaggdata
  const countries = ["Sweden", "Norway", "Finland", "Denmark", "Iceland"];

  // Filtrera beroende på söktermen
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flag-all">
      <SearchBar onSearch={setSearchTerm} />

      <ul className="country-list">
        {filteredCountries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlagAll;
