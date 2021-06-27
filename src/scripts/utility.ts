/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { SearchResultProps } from '../types';

const formatResults = (data: any[]): SearchResultProps[] => {
  return data.map(({ name, alpha3Code }) => {
    const x: SearchResultProps = { countryName: name, alpha3Code };
    return x;
  });
};

export default formatResults;
