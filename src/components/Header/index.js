import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Header from 'src/components/Header';
import './header.scss';

const HeaderTitle = () => (
  <div className="header">
    <Header
    name={nomdelaprops}
    />
    {/* <h1 className="header-title">Apero'Clock</h1> */}
  </div>
);

Header.propTypes = {
  title: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeaderTitle;
