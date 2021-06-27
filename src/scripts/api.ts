const baseUrl: String = 'https://restcountries.eu/rest/v2/';

const getCountriesByTerm = async (term: String) => {
  const res = await fetch(`${baseUrl}name/${term}`);
  return res.ok ? res.json() : [];
};

const getCountryByAlpha3Code = async (code: String) => {
  const res = await fetch(`${baseUrl}alpha/${code}`);
  return res.ok ? res.json() : {};
};

export { getCountriesByTerm, getCountryByAlpha3Code };
