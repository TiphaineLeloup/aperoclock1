import React from 'react';
import { Button } from 'antd';
import './home.scss';

// FORMULAIRE CHOIX ENTRE CONNEXION ET INSCRIPTION - HOME

const Home = () => (
  <form>
    <Button type="link">Connexion</Button>

    <Button type="link">Inscription</Button>
  </form>
);

export default Home;
