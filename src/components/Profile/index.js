// == Import : npm
import React from 'react';
import {
  Input,
  Button,
  Upload,
  Icon,
  Form,
  Switch,
} from 'antd';

// == Import : local
import './profile.scss';

// == Composant
class ProfileUnwrap extends React.Component {
  render() {
    const { TextArea } = Input;
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };

    return (
      <Form layout="horizontal">
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
      </Form>
    );
  }
}
const Profile = Form.create({ name: 'form_profile' })(ProfileUnwrap);

// == Export
export default Profile;
