import React, { FunctionComponent } from 'react';
import { Description } from '../types';

const CountryInfo: FunctionComponent<Description> = ({
  countryName,
  alpha3Code,
  capital,
  population,
  area,
  alternateNames,
  region,
  subRegion,
  url,
  description,
}) => {
  return (
    <section>
      <h2>{`${countryName} (${alpha3Code})`}</h2>
      <figure>
        <img src={url} alt={description} />
        <figcaption>{description}</figcaption>
      </figure>
      <aside>
        <div>{`Capital: ${capital}`}</div>
        <div>{`Population: ${population}`}</div>
        <div>{`Area: ${area}`}</div>
      </aside>
      <aside>
        <div>{`Region: ${region}`}</div>
        <div>{`Subregion: ${subRegion}`}</div>
      </aside>
      <aside>
        <ul>
          {alternateNames?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default CountryInfo;
