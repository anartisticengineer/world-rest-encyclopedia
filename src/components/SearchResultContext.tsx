import { createContext } from 'react';
import { Description } from '../types';

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

const SearchResultContext = createContext(initialResult);

export default SearchResultContext;
