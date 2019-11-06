import React from 'react';
import {
  Modal,
  Form,
  Input,
} from 'antd';
import Legal from 'src/components/Footer/legal-mentions';
import './footer.scss';

class Footer extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
    modal3Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  setModal3Visible(modal3Visible) {
    this.setState({ modal3Visible });
  }


  render() {
    const { TextArea } = Input;
    return (
      <>
        <div className="footer">
          <a className="footer-text" type="link" onClick={() => this.setModal1Visible(true)}>
        Copyright
          </a>
          <Modal
            title="Copyright"
            visible={this.state.modal1Visible}
            onOk={() => this.setModal1Visible(false)}
            onCancel={() => this.setModal1Visible(false)}
            footer={null}

          >
            <p>AperO'Clock - Promo Rocket 2019</p>
          </Modal>

          <a className="footer-text" type="link" onClick={() => this.setModal2Visible(true)}>
        Mentions Légales
          </a>
          <Modal
            title="Mentions Légales"
            visible={this.state.modal2Visible}
            onOk={() => this.setModal2Visible(false)}
            onCancel={() => this.setModal2Visible(false)}
            cancelText="Fermer"
          >
            <Legal />
          </Modal>

          <a className="footer-text" type="link" onClick={() => this.setModal3Visible(true)}>
        Contact
          </a>
          <Modal
            title="Contactez-nous"
            visible={this.state.modal3Visible}
            onOk={() => this.setModal3Visible(false)}
            onCancel={() => this.setModal3Visible(false)}
            cancelText="Fermer"
            okText="Envoyer"
          >
            <Form.Item label="Votre adresse mail">
              <Input type="text" id="userMailAdress" name="fullName" placeholder="Email" />
            </Form.Item>
            <Form.Item label="Objet du message">
              <Input type="text" id="messageSubject" name="fullName" placeholder="Objet" />
            </Form.Item>
            <Form.Item label="Votre message">
              <TextArea placeholder="Message" rows={4} />
            </Form.Item>
          </Modal>
        </div>
      </>
    );
  }
}

export default Footer;
