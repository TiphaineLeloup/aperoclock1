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

class SignInUnwrap extends React.Component {

  render() {
    const { TextArea } = Input;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const formItemLayout =
    {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };

    return (
      <Form layout={"horizontal"}>

        <Form.Item label="Nom d'Utilisateur" {...formItemLayout}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="name" name="name" placeholder="Pseudo" />,
          )}
        </Form.Item>
        <Form.Item label="Mot de passe" {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="password" name="password" placeholder="Mot de passe" />,
          )}
        </Form.Item>
        <Form.Item label="Confirmation Mot de passe" {...formItemLayout}>
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="confirmPassword" name="confirmPassword" placeholder="confirmation mot de passe" />,
          )}
        </Form.Item>
        <Form.Item label="Email" {...formItemLayout}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="email" name="email" placeholder="Email" />,
          )}
        </Form.Item>
        <Form.Item label="Date de naissance" {...formItemLayout}>
          {getFieldDecorator('birthDate', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="birthDate" name="birthDate" placeholder="Date de naissance" />,
          )}
        </Form.Item>
        <Form.Item label="Nom Prénom" {...formItemLayout}>
            <Input type="text" id="fullName" name="fullName" placeholder="Nom prénom (facultatif)" />
        </Form.Item>
        <Form.Item label="Adresse" {...formItemLayout}>
          {getFieldDecorator('addressComplementInside', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="addressComplementInside" name="addressComplementInside" placeholder="Adresse" />,
          )}
        </Form.Item>
        <Form.Item label="Complément d'adresse" {...formItemLayout}>
            <Input type="text" id="addressComplementOutside" name="fullName" placeholder="Complément d'adresse (facultatif)" />
        </Form.Item>
        <Form.Item label="Code postal" {...formItemLayout}>
          {getFieldDecorator('addressePostalCode', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="addressePostalCode" name="addressePostalCode" placeholder="Code postal" />,
          )}
        </Form.Item>
        <Form.Item label="Ville" {...formItemLayout}>
          {getFieldDecorator('addressCity', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="addressCity" name="addressCity" placeholder="Ville" />,
          )}
        </Form.Item>
        <Form.Item label="Pays" {...formItemLayout}>
          {getFieldDecorator('country', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="country" name="country" placeholder="Pays" />,
          )}
        </Form.Item>
        <Form.Item label="Photo de profil" {...formItemLayout}>
          <Upload id="logo" name="logo" action="/upload.do" listType="picture">
            <Button id="profilePic" name="profilePic">
              <Icon type="upload" /> Depuis votre ordinateur
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Biographie" {...formItemLayout}>
          <TextArea type="text" id="userDesc" name="userDesc" placeholder="Petite biographie rigolote (facultatif)" rows={4} />
        </Form.Item>
      
      <Button name="sendForm">Valider</Button>
      </Form>
    );
  }
};

const SignIn = Form.create({ name: 'form_login' })(SignInUnwrap);

export default SignIn;
