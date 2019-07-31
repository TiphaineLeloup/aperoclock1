import React from 'react';
import { Menu } from 'antd';

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
      <Menu.Item><a href="#" className="menu-item-link">Home</a></Menu.Item>
      <Menu.Item><a href="#" className="menu-item-link">Map</a></Menu.Item>
      <Menu.Item><a href="#" className="menu-item-link">Groupes</a></Menu.Item>
      <Menu.Item><a href="#" className="menu-item-link">Événements</a></Menu.Item>
      <Menu.Item><a href="#" className="menu-item-link">Profil</a></Menu.Item>
      <Menu.Item><a href="#" className="menu-item-link">Déconnexion</a></Menu.Item>
    </Menu>
  </nav>
);

export default Nav;
