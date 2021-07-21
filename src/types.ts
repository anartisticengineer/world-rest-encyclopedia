interface Result {
  countryName: String;
  alpha3Code: String;
}

interface Flag {
  url: string;
  description: string;
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

interface Social {
  faName: String;
  link: string;
}

export type Description = BasicDescription & Result & Flag;
export type SearchResultProps = Result;
export type OnClick = onClickFcn;
export type SocialProps = Social;
