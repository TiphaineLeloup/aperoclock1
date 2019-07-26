import React from 'react';
import { Button } from 'antd';
import './login.scss';

// FORMULAIRE CHOIX ENTRE CONNEXION ET INSCRIPTION

const Login = () => (
  <form>
    <Button type="link">Connexion</Button>

    <Button type="link">Inscription</Button>
  </form>
);

export default Login;
