import React from 'react';
import PropTypes from 'prop-types';

import './loginform.scss';

import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
} from 'antd';

// FORMULAIRE D'INSCRIPTION

class LoginFormUnwrap extends React.Component {
  usernameInput = React.createRef();

  passwordInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.usernameInput.current.state.value;
    const password = this.passwordInput.current.state.value;
    const { dispatchLogin } = this.props;

    if (username && password) {
      console.log('submit');
      dispatchLogin(username, password);
    }
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="Nom d'utilisateur">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input
              onChange={this.handleChange}
              placeholder="Username"
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
              placeholder="Password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              ref={this.passwordInput}
              type="password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
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
