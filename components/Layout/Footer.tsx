import React from 'react';

import { footerText } from 'lib/constants';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div>{footerText}</div>
    </footer>
  );
};

export default Footer;
