import React, { FunctionComponent, useContext } from 'react';

import { SearchResultProps } from '../types';
import SearchResultContext from './SearchResultContext';

const SearchResult: FunctionComponent<SearchResultProps> = ({
  countryName,
  alpha3Code,
}) => {
  const value = useContext(SearchResultContext);

  const handleClick = () => {
    value.countryName = countryName;
    value.alpha3Code = alpha3Code;
  };

  return (
    <button type="button" onClick={handleClick}>
      <span>{countryName} - </span>
      <span>{alpha3Code}</span>
    </button>
  );
};

export default SearchResult;
