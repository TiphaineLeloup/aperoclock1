import React from 'react';
import {
  Button,
  Modal,
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
    return (
      <>
        <div className="footer">
          <Button className="footer-text" type="link" onClick={() => this.setModal1Visible(true)}>
        Copyright
          </Button>
          <Modal
            title="Copyright"
            visible={this.state.modal1Visible}
            onOk={() => this.setModal1Visible(false)}
            onCancel={() => this.setModal1Visible(false)}
            footer={null}
            
          >
            <p>AperO'Clock - Promo Rocket 2019</p>
          </Modal>

          <Button className="footer-text" type="link" onClick={() => this.setModal2Visible(true)}>
        Mentions Légales
          </Button>
          <Modal
            title="Mentions Légales"
            visible={this.state.modal2Visible}
            onOk={() => this.setModal2Visible(false)}
            onCancel={() => this.setModal2Visible(false)}
            footer={null}
          >
            <Legal />
          </Modal>

          <Button className="footer-text" type="link" onClick={() => this.setModal3Visible(true)}>
        Contact
          </Button>
          <Modal
            title="Nous contacter"
            visible={this.state.modal3Visible}
            onOk={() => this.setModal3Visible(false)}
            onCancel={() => this.setModal3Visible(false)}
            footer={null}
          >
          Aperoclock@mail.com
          </Modal>
        </div>
      </>
    );
  }
}

export default Footer;
