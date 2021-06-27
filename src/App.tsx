import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import CountryInfo from './components/CountryInfo';
import { getCountriesByTerm, getCountryByAlpha3Code } from './scripts/api';
import { Description } from './types';
import formatResults from './scripts/utility';

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

  // Search functionality
  const [search, updateSearch] = useState({ term: '', results: [] });
  const [result, updateResult] = useState(initialResult);
  // Selection

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
    getCountryByAlpha3Code(code)
      .then((country) => {
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
    <main>
      <h1>World Encyclopedia</h1>
      <SearchBar onChangeFcn={handleSearchChange} />
      <div>
        {formatResults(search.results).map(({ countryName, alpha3Code }) => (
          <SearchResult
            countryName={countryName}
            alpha3Code={alpha3Code}
            fcn={() => handleClickedResult(alpha3Code)}
          />
        ))}
      </div>
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
    </main>
  );
}

export default App;
