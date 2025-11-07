import { useLoaderData, Link, useOutletContext } from "react-router-dom";
import arrowLeftWhite from '../assets/arrow-left.svg'
import arrowLeftDark from '../assets/arrow-left-dark.svg'

export const FlagsDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);

  if (!res.ok) {
    throw new Error("Kunde inte hämta landets detaljer");
  }

  const data = await res.json();
  return data[0]; // API returnerar en array med ett objekt
};

const FlagDetail = () => {
  const country = useLoaderData();
  const { isLight } = useOutletContext();

  return (
    <div className="flag-detail">
          <div className="arrow-left-content">
          <img
          src={isLight ? arrowLeftDark : arrowLeftWhite}
          alt="arrow left"
          className="arrow-left"
            />
      <Link to="/" className="back-button" style={{ textDecoration: 'none' }}>Back</Link>
          </div>

      <div className="flag-detail-content">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="flag-detail-image"
        />
        

        <div className="flag-info">
          <div className="flag-info-column1">
          <h3>{country.name.common}</h3>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital?.join(", ")}</p>
          <p><strong>Native name:</strong> {country.name.nativeName? Object.values(country.name.nativeName)[0].common: country.name.common}</p>
          </div>
          <div className="flag-info-column2">
          <p><strong>Top Level Domain:</strong> {country.tld[0]} </p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
          </div>
          <div className="border-countries">
            <strong>Border Countries:</strong>
                {country.borders
                ? country.borders.map((border) => (
                    <p key={border} className="border-box">
                      {border}
                    </p>
                  ))
                : " No border countries"}
            
          </div>

          </div>
        </div>
      </div>
          

  );
};

export default FlagDetail;
