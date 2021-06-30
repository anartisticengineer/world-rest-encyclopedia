import React, { FunctionComponent, useEffect, useRef } from 'react';

const SearchBar: FunctionComponent<any> = ({ onChangeFcn }) => {
  const inputEl: any = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return (
    <input
      className="searchbar"
      placeholder="Search"
      onChange={onChangeFcn}
      ref={inputEl}
      type="text"
    />
  );
};

export default SearchBar;
