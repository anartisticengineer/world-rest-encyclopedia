import React, { FunctionComponent } from 'react';
import { SocialProps } from '../types';

const SocialLink: FunctionComponent<SocialProps> = ({
  faName,
  link,
  children,
}) => {
  return (
    <a href={link} target="__blank" className="footer__social__link">
      <i className={`fab fa-${faName}`}>
        <span className="footer__social__name">{children}</span>
      </i>
    </a>
  );
};

export default SocialLink;
