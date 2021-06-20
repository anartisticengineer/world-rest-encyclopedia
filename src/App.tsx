import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import SearchResultContext from './components/SearchResultContext';
import { Description } from './types';

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

  useEffect(() => {
    if (initialResult.countryName) {
      console.log('Country changed');
    }
  }, [initialResult.countryName]);

  const [search, updateSearch] = useState({ term: '', results: [] });

  const handleSearchChange = (event: any) => {
    updateSearch({ ...search, term: event.target.value });
  };

  return (
    <SearchResultContext.Provider value={initialResult}>
      <main>
        <h1>World Encyclopedia</h1>
        <SearchBar onChangeFcn={handleSearchChange} />
      </main>
    </SearchResultContext.Provider>
  );
}

export default App;
