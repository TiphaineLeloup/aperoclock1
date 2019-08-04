import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <p className="footer-text"><NavLink to="/contact" className="footer-link">Copyright - Mentions Légales - Contact</NavLink></p>
  </div>
);

export default Footer;
