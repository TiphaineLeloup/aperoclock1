import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
// import slugify from 'slugify';
// si besoin pour des URL fiendly (si on commence à avoir des URL à rallonge)

import Logo from 'src/img/logo_min.svg';
import './nav.scss';

const Nav = () => (
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
      <Menu.Item><NavLink to="/" className="menu-item-link" exact activeClassName="menu-item-link--active">Déconnexion</NavLink></Menu.Item>
    </Menu>
  </nav>
);

export default Nav;
