import React from 'react';

import './signin.scss';
// import { Form } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

// FORMULAIRE DE CONNEXION

// trouver comment inserer les getFieldDecorator https://ant.design/components/form/ (tiphaine)

class LoginFormToCreate extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={() => { }} className = "login-form" >
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
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
};

const SignIn = Form.create({name:'login'})(LoginFormToCreate);
export default SignIn;
