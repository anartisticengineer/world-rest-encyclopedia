import React, { FunctionComponent } from 'react';

import { OnClick, SearchResultProps } from '../types';

const SearchResult: FunctionComponent<SearchResultProps & OnClick> = ({
  countryName,
  alpha3Code,
  fcn,
}) => {
  return (
    <button type="button" onClick={fcn}>
      <span>{countryName} - </span>
      <span>{alpha3Code}</span>
    </button>
  );
};

export default SearchResult;
