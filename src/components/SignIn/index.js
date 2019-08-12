/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  DatePicker,
  Form,
  Icon,
  Input,
  Upload,
} from 'antd';

import './signin.scss';


// FORMULAIRE D'INSCRIPTION

// eslint-disable-next-line react/prefer-stateless-function
class SignInUnwrap extends React.Component {
  render() {
    const { TextArea } = Input;
    const {
      getFieldDecorator,
      getFieldsError,
      isFieldTouched,
    } = this.props.form;

    return (
      <Form layout="horizontal">

        <Form.Item label="Nom d'Utilisateur">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="name" name="name" placeholder="Pseudo" />,
          )}
        </Form.Item>
        <Form.Item label="Mot de passe">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="password" id="password" name="password" placeholder="Mot de passe" />,
          )}
        </Form.Item>
        <Form.Item label="Confirmez votre mot de passe">
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="password" id="confirmPassword" name="confirmPassword" placeholder="confirmez votre mot de passe" />,
          )}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="email" id="email" name="email" placeholder="Email" />,
          )}
        </Form.Item>
        <Form.Item label="Date de naissance">
          {getFieldDecorator('birthDate', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <DatePicker format="DD/MM/YYYY" />
          )}
        </Form.Item>
        <Form.Item label="Nom Prénom">
          <Input type="text" id="fullName" name="fullName" placeholder="Nom prénom (facultatif)" />
        </Form.Item>
        <Form.Item label="Adresse">
          {getFieldDecorator('addressComplementInside', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="addressComplementInside" name="addressComplementInside" placeholder="Adresse" />,
          )}
        </Form.Item>
        <Form.Item label="Complément d'adresse">
          <Input type="text" id="addressComplementOutside" name="fullName" placeholder="Bis, Ter, etc... (facultatif)" />
        </Form.Item>
        <Form.Item label="Code postal">
          {getFieldDecorator('addressePostalCode', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="addressePostalCode" name="addressePostalCode" placeholder="Code postal" />,
          )}
        </Form.Item>
        <Form.Item label="Ville">
          {getFieldDecorator('addressCity', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="addressCity" name="addressCity" placeholder="Ville" />,
          )}
        </Form.Item>
        <Form.Item label="Pays">
          {getFieldDecorator('country', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="country" name="country" placeholder="Pays" />,
          )}
        </Form.Item>
        <Form.Item label="Photo de profil">
          <Upload id="logo" name="logo" action="/upload.do" listType="picture">
            <Button id="profilePic" name="profilePic">
              <Icon type="upload" /> Depuis votre ordinateur
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Biographie">
          <TextArea type="text" id="userDesc" name="userDesc" placeholder="Quels types d'événements vous intéressent ? Qu'aimez-vous faire dans la vie ? Pain au chocolat ou chocolatine ? (facultatif)" rows={4} />
        </Form.Item>

        <Button name="sendForm" type="primary"><NavLink to="/">Valider</NavLink></Button>
      </Form>
    );
  }
}

const SignIn = Form.create({ name: 'form_login' })(SignInUnwrap);

export default SignIn;
