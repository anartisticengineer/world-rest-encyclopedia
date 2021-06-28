import React, { FunctionComponent } from 'react';
import shortid from 'shortid';
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
    <section className="countryinfo">
      <h2 className="countryinfo__title">{`${countryName} (${alpha3Code})`}</h2>
      <figure className="countryinfo__figure">
        <img src={url} alt={description} />
        <figcaption>{description}</figcaption>
      </figure>
      <aside className="countryinfo__basic">
        <div>{`Capital: ${capital}`}</div>
        <div>{`Population: ${population}`}</div>
        <div>{`Area: ${area}`}</div>
      </aside>
      <aside className="countryinfo__region">
        <div>{`Region: ${region}`}</div>
        <div>{`Subregion: ${subRegion}`}</div>
      </aside>
      <aside className="countryinfo__altnames">
        <ul>
          {alternateNames?.map((item) => (
            <li key={shortid.generate()}>{item}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default CountryInfo;
