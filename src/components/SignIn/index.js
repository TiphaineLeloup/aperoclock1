import React from 'react';
import {
  Input,
  Button,
  Upload,
  Icon,
  Form,
} from 'antd';
import './signin.scss';


// FORMULAIRE D'INSCRIPTION

const SignIn = () => {
  const { TextArea } = Input;
  return (
    <form>
      {/* <label htmlFor="name">Pseudo :</label> */}
      <Form.Item label="Upload">
        <Input type="text" id="name" name="name" placeholder="Nom utilisateur" />;
      </Form.Item>
      <Input type="text" id="password" name="password" placeholder="Mot de passe" />;
      <Input type="text" id="confirmPassword" name="confirmPassword" placeholder="confirmation mot de passe" />;
      <Input type="text" id="email" name="email" placeholder="Email" />;
      <Input type="text" id="birthDate" name="birthDate" placeholder="Date de naissance" />;
      <Input type="text" id="fullName" name="fullName" placeholder="Nom prénom (facultatif)" />;
      <Input type="text" id="addressComplementInside" name="addressComplementInside" placeholder="Adresse" />;
      <Input type="text" id="addressComplementOutside" name="addressComplementOutside" placeholder="Complément adresse" />;
      <Input type="text" id="addressePostalCode" name="addressePostalCode" placeholder="Code postal" />;
      <Input type="text" id="addressCity" name="addressCity" placeholder="Ville" />;
      <Input type="text" id="country" name="country" placeholder="Pays" />;
      <Upload id="logo" name="logo" action="/upload.do" listType="picture">
        {/* <label htmlFor="profilePic">Photo de profil :</label> */}
        <Button id="profilePic" name="profilePic">
          <Icon type="upload" /> Depuis votre ordinateur
        </Button>
      </Upload>
          )}
      <TextArea type="text" id="userDesc" name="userDesc" placeholder="Petite biographie rigolote (facultatif)" rows={4} />;
      <Button name="sendForm">Valider</Button>
    </form>
  );
};


export default SignIn;
