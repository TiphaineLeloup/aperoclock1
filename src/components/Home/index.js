import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import './home.scss';

// FORMULAIRE CHOIX ENTRE CONNEXION ET INSCRIPTION - HOME

const Home = () => (
  <form>
    <Button><NavLink to="/login" className="home-item-link" exact activeClassName="home-item-link--active">Connexion</NavLink></Button>

    <Button><NavLink to="/inscription" className="home-item-link" exact activeClassName="home-item-link--active">Inscription</NavLink></Button>
  </form>
);

export default Home;
