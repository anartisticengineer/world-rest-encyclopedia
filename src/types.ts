interface Result {
  countryName: String;
  alpha3Code: String;
}

interface Flag {
  url: String;
  description: String;
}

interface BasicDescription {
  capital: String;
  population: Number;
  area: Number;
  alternateNames: String[] | null;
  region: String;
  subRegion: String | null;
}

interface onClickFcn {
  fcn: () => any;
}

export type Description = BasicDescription & Result & Flag;
export type SearchResultProps = Result;
export type OnClick = onClickFcn;
