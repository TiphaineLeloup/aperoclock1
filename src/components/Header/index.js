import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './header.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const { baseTitle, title } = this.props;
    return (
      <div className="header">
        <h1 className="header-title">{ title } { title !== '' ? ' - ' : ''} { baseTitle } </h1>
      </div>
    );
  }
}


export default Header;
