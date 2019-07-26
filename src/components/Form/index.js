import React from 'react';

import './form.scss';

const Form = () => (
  <form>
    <label id="indentifiant">
    Identifiant
      <input type="text" name="Identifiant" />
    </label>
    <label>
    Mot de passe
      <input type="text" name="Mot de passe" />
    </label>
    <input type="submit" value="Envoyer" />
    </form>
);

export default Form;
