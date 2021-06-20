import React, { FunctionComponent } from 'react';

const SearchBar: FunctionComponent<any> = ({ onChangeFcn }) => {
  return <input onChange={onChangeFcn} />;
};

export default SearchBar;
