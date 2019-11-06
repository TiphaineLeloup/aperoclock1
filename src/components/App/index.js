// == Import : npm
import React from 'react';
import { Layout, Input, Modal, Form } from 'antd';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local

// import AlertColor from 'src/components/Alert';
import Dashboard from 'src/containers/Dashboard';
// import DrawerMarker from 'src/components/Drawer';
import Events from 'src/containers/Events';
import Footer from 'src/components/Footer';
import Groups from 'src/containers/Groups';
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import LoginForm from 'src/containers/LoginForm';
import Logo from 'src/img/logo.svg';
import Map from 'src/containers/Map';
import Nav from 'src/containers/Nav';
// import PrivateRoute from './PrivateRoute';
import Profile from 'src/containers/Profile';
import SignIn from 'src/components/SignIn';


import './app.scss';


// == Composant
// eslint-disable-next-line react/prefer-stateless-function

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      Header: AntdHeader,
      Footer: AntdFooter,
      Sider,
      Content,
    } = Layout;

    const { dispatchAll, loggedIn } = this.props;

    const { TextArea } = Input;

    if (loggedIn) {
      dispatchAll();
    }

    return (
      <>
        {loggedIn === true
          ? (
            // if logged
            <div id="app">
              <Layout>
                <Sider>
                  <Nav />
                </Sider>
                <Layout>
                  <AntdHeader>
                    <Header />
                  </AntdHeader>
                  <Content>
                    <Switch>
                      <Route path="/map" exact component={Map} />
                      <Route path="/groupes" exact component={Groups} />
                      <Route path="/evenements" exact component={Events} />
                      <Route path="/profil" exact component={Profile} />
                      <Route exact component={Dashboard} />
                    </Switch>
                  </Content>
                  <AntdFooter className="footer">
                    <Footer />
                  </AntdFooter>
                </Layout>
              </Layout>
            </div>
          ) : (
            // if not logged
            <div id="app-home">
              <Layout>
                <Content>
                  <img className="logo" src={Logo} alt="logo" />
                  <p>AperO'Clock vous permet de vous retrouver entre amis, entre collègues, entre famille, avec des alertes intelligentes !</p>
                  <Switch>
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/inscription" exact component={SignIn} />
                    <Route exact component={Home} />
                  </Switch>
                  <a type="primary" onClick={this.showModal}>
                    Contactez-nous
                  </a>

                  {/* FORMULAIRE DE CONTACT - FENETRE MODALE */}
                  <Modal
                    title="Contactez-nous"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
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
                </Content>
              </Layout>
            </div>
          )
        }

      </>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  dispatchAll: PropTypes.func.isRequired,
};


// == Export
export default App;
