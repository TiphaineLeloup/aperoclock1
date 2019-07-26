import React from 'react';

import './loginform.scss';
import { Form } from 'antd';

const LoginForm = () => (
  <form>
    <label>
    E-mail
      <input type="text" name="Email" />
    </label>
    <label>
    Identifiant
      <input type="text" name="Identifiant" />
    </label>
    <label>
    Mot de passe
      <input type="text" name="Mot de passe" />
    </label>
    <label>
    Confirmer le mot de passe
      <input type="text" name="Confirmer le mot de passe" />
    </label>
    <input type="submit" value="Envoyer" />
  </form>
);

export default LoginForm;
