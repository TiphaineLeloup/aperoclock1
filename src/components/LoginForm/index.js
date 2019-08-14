import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './loginform.scss';

import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
} from 'antd';

// FORMULAIRE DE CONNECTION

class LoginFormUnwrap extends React.Component {
  usernameInput = React.createRef();

  passwordInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.usernameInput.current.state.value;
    const password = this.passwordInput.current.state.value;
    const { dispatchLogin } = this.props;
    if (username && password) {
      dispatchLogin(username, password);
    }
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <Form.Item label="Nom d'utilisateur">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input
              onChange={this.handleChange}
              placeholder="Identifiant"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              ref={this.usernameInput}
            />,
          )}
        </Form.Item>
        <Form.Item label="Mot de passe">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input
              onChange={this.handleChange}
              placeholder="Mot de passe"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              ref={this.passwordInput}
              type="password"
            />,
          )}
        </Form.Item>
        <Form.Item className="login-actions">
          <Button type="primary" htmlType="submit" className="login-form-button">
              Connexion
          </Button>
          <Button type="primary">
            <NavLink to="/inscription">
              Inscription
            </NavLink>
          </Button>
          <div>
            <a className="login-form-forgot" href="">
              Mot de passe oublié ?
            </a>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

LoginFormUnwrap.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

const LoginForm = Form.create({ name: 'login' })(LoginFormUnwrap);
export default LoginForm;
