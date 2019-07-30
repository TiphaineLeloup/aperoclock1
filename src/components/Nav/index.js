import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
// import slugify from 'slugify'; / si besoin pour des URL fiendly (si on commence à avoir des URL à rallonge)

import './nav.scss';

const Nav = () => (
  <nav>
    <Menu
      className="side-menu"
      mode="inline"
      style={{ width: 200 }}
    >
      <Menu.Item><NavLink to="/" className="menu-item-link">Accueil</NavLink></Menu.Item>
      <Menu.Item><NavLink to="/map" className="menu-item-link">Map</NavLink></Menu.Item>
      <Menu.Item><NavLink to="/groupes" className="menu-item-link">Groupes</NavLink></Menu.Item>
      <Menu.Item><NavLink to="/évènements" className="menu-item-link">Événements</NavLink></Menu.Item>
      <Menu.Item><NavLink to="/profil" className="menu-item-link">Profil</NavLink></Menu.Item>
      <Menu.Item><NavLink to="/" className="menu-item-link">Déconnexion</NavLink></Menu.Item>
    </Menu>
  </nav>
);

export default Nav;
