import React, { FunctionComponent } from 'react';
import { SearchResultProps } from '../types';

const SearchResult: FunctionComponent<SearchResultProps> = ({
  countryName,
  alpha3Code,
}) => {
  return (
    <button type="button">
      <span>{countryName} - </span>
      <span>{alpha3Code}</span>
    </button>
  );
};

export default SearchResult;
