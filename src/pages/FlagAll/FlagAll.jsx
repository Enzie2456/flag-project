import { useOutletContext } from "react-router-dom";
import RegionFilter from "../../components/RegionFilter";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlagAll = () => {
  const { isLight } = useOutletContext();

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/independent?status=true");
        if (!res.ok) throw new Error("Kunde inte hämta flaggdata");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    return matchesSearch && matchesRegion;
  });

  if (loading) return <p>Loading flags...</p>;
  if (error) return <p style={{ color: "red" }}>Fel: {error}</p>;

  return (
    <div className="flag-all">
      <div className="filter-bar">
        <SearchBar onSearch={setSearchTerm} isLight={isLight} />
        <RegionFilter onSelectRegion={setSelectedRegion} isLight={isLight} />
      </div>

      <div className="flag-grid">
        {filteredCountries.map((country) => (
          <Link
            to={`/flagdetails/${country.cca3}`}
            key={country.cca3}
            className="flag-card"
          >
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="flag-image"
            />
            <div className="flag-text">
              <h2 className="flag-name">{country.name.common}</h2>
              <p className="flag-population">Population: {country.population}</p>
              <p className="flag-region">Region: {country.region}</p>
              <p className="flag-capital">Capital: {country.capital}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlagAll;
