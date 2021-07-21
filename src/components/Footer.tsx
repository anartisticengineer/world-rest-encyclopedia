import React from 'react';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <span>Connect with me online!</span>
        <SocialLink
          faName="github"
          link="https://github.com/anartisticengineer"
        >
          anartisticengineer
        </SocialLink>
        <SocialLink
          faName="linkedin-in"
          link="https://www.linkedin.com/in/justinjohnson95"
        >
          LinkedIn
        </SocialLink>
      </div>
      <div className="footer__copyright">&copy; Justin Johnson 2021</div>
    </footer>
  );
};

export default Footer;
