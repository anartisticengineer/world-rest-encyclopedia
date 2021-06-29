import React, { FunctionComponent } from 'react';

const SearchBar: FunctionComponent<any> = ({ onChangeFcn }) => {
  return (
    <input className="searchbar" placeholder="Search" onChange={onChangeFcn} />
  );
};

export default SearchBar;
