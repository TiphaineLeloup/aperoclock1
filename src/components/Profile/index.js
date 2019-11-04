// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Form,
  Icon,
  Input,
  InputNumber,
  Row,
  Slider,
  Switch,
  Upload,
} from 'antd';

// == Import : local
import './profile.scss';

// == Composant
class ProfileUnwrap extends React.Component {
  state= {
    inputValue: 0,
  }

  componentDidMount() {
    const { dispatchNewTitle } = this.props;
    dispatchNewTitle('Ma page profil');
  }

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };


  render() {
    const { TextArea } = Input;
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };

    return (
      <Form layout="horizontal">
        <Form.Item label="E-mail" {...formItemLayout}>
          {getFieldDecorator('mailInside', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="emailInside" name="emailInside" placeholder="Votre e-mail" />,
          )}
        </Form.Item>
        <Form.Item label="Mot de passe" {...formItemLayout}>
          {getFieldDecorator('passwordInside', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="password" id="passwordInside" name="passwordInside" />,
          )}
        </Form.Item>
        <Form.Item label="Date de naissance" {...formItemLayout}>
          {getFieldDecorator('birthDate', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="birthDate" name="birthDate" placeholder="00/00/0000" />,
          )}
        </Form.Item>
        <Form.Item label="Adresse" {...formItemLayout}>
          {getFieldDecorator('addressComplementInside', {
            rules: [{ required: true, message: 'Ce champ est requis' }],
          })(
            <Input type="text" id="addressComplementInside" name="addressComplementInside" placeholder="Votre adresse" />,
          )}
        </Form.Item>
        <Form.Item label="Complément d'adresse" {...formItemLayout}>
          <Input type="text" id="addressComplementOutside" name="fullName" placeholder="Bis, Ter, etc... (facultatif)" />
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
        <Form.Item label="Biographie" {...formItemLayout}>
          <TextArea type="text" id="userDesc" name="userDesc" placeholder="Petite biographie rigolote (facultatif)" rows={4} />
        </Form.Item>
        <Form.Item label="Photo de profil" {...formItemLayout}>
          <Upload id="logo" name="logo" action="/upload.do" listType="picture">
            <Button id="profilePic" name="profilePic">
              <Icon type="upload" /> Depuis votre ordinateur
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Alerte par mail" {...formItemLayout}>
          <Switch size="small" defaultChecked />
        </Form.Item>
        <Form.Item label="Alertes uniquement en-dessous de (en km)" {...formItemLayout}>
          <Row>
            <Col span={12}>
              <Slider
                min={1}
                max={300}
                onChange={this.onChange}
                value={typeof this.state.inputValue === 'number' ? this.state.inputValue : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={300}
                style={{ marginLeft: 16 }}
                value={this.state.inputValue}
                onChange={this.onChange}
              />
            </Col>
          </Row>
        </Form.Item>
        <Button type="primary">
          Envoyer
        </Button>
      </Form>
    );
  }
}
const Profile = Form.create({ name: 'form_profile' })(ProfileUnwrap);

Profile.propTypes = {
  dispatchNewTitle: PropTypes.func.isRequired,
};

// == Export
export default Profile;
