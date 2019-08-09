import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import slugify from 'slugify';
// si besoin pour des URL fiendly (si on commence à avoir des URL à rallonge)

import Logo from 'src/img/logo_min.svg';
import './nav.scss';

class Nav extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { dispatchLogout } = this.props;
    dispatchLogout();
  }

  render() {
    return (
      <nav>
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <Menu
          className="side-menu"
          mode="inline"
          style={{ width: 200 }}
        >
          <Menu.Item><NavLink to="/" className="menu-item-link" exact activeClassName="menu-item-link--active">Accueil</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/map" className="menu-item-link" exact activeClassName="menu-item-link--active">Map</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/groupes" className="menu-item-link" exact activeClassName="menu-item-link--active">Groupes</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/evenements" className="menu-item-link" exact activeClassName="menu-item-link--active">Événements</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/profil" className="menu-item-link" exact activeClassName="menu-item-link--active">Profil</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/" className="menu-item-link" exact activeClassName="menu-item-link--active" onClick={this.handleClick}>Déconnexion</NavLink></Menu.Item>
        </Menu>
      </nav>
    );
  }
}

Nav.propTypes = {
  dispatchLogout: PropTypes.func.isRequired,
};

export default Nav;
