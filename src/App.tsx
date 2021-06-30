import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import CountryInfo from './components/CountryInfo';
import Loading from './components/Loading';
import { getCountriesByTerm, getCountryByAlpha3Code } from './scripts/api';
import { Description } from './types';
import formatResults from './scripts/utility';

import './styles/index.scss';

function App() {
  const initialResult: Description = {
    countryName: '',
    alpha3Code: '',
    capital: '',
    population: 0,
    area: 0,
    alternateNames: null,
    region: '',
    subRegion: null,
    url: '',
    description: '',
  };

  // States
  const [search, updateSearch] = useState({ term: '', results: [] });
  const [result, updateResult] = useState(initialResult);
  const [resultIsLoading, updateResultIsLoading] = useState(false);

  useEffect(() => {
    if (search.term.length > 2) {
      getCountriesByTerm(search.term)
        .then((data) => updateSearch({ ...search, results: data }))
        .catch((err) => console.error(err));
    }
  }, [search.term]);

  const handleSearchChange = (event: any) => {
    updateSearch({ ...search, term: event.target.value });
  };

  const handleClickedResult = (code: String) => {
    updateResultIsLoading(true);
    getCountryByAlpha3Code(code)
      .then((country) => {
        updateResultIsLoading(false);
        updateResult({
          countryName: country.name,
          alpha3Code: country.alpha3Code,
          capital: country.capital,
          population: country.population,
          area: country.area,
          alternateNames: country.altSpellings,
          region: country.region,
          subRegion: country.subregion,
          url: country.flag,
          description: `Flag of ${country.name}`,
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <main className="container">
      <header className="container__header">
        <h1>World Encyclopedia</h1>
        <SearchBar onChangeFcn={handleSearchChange} />
        <ul>
          {formatResults(search.results).map(({ countryName, alpha3Code }) => (
            <li key={shortid.generate()}>
              <SearchResult
                countryName={countryName}
                alpha3Code={alpha3Code}
                fcn={() => handleClickedResult(alpha3Code)}
              />
            </li>
          ))}
        </ul>
      </header>
      {result.countryName ? (
        <CountryInfo
          countryName={result.countryName}
          alpha3Code={result.alpha3Code}
          capital={result.capital}
          population={result.population}
          area={result.area}
          alternateNames={result.alternateNames}
          region={result.region}
          subRegion={result.subRegion}
          url={result.url}
          description={result.description}
        />
      ) : null}
      {resultIsLoading ? <Loading /> : null}
    </main>
  );
}

export default App;
