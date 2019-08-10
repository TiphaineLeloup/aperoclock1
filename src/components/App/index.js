// == Import : npm
import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import Contact from 'src/components/Contact';
import Dashboard from 'src/containers/Dashboard';
import Events from 'src/components/Events';
import Footer from 'src/components/Footer';
import Groups from 'src/components/Groups';
<<<<<<< HEAD
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import LoginForm from 'src/containers/LoginForm';
=======
import SimpleMap from 'src/components/Map';
import Profile from 'src/components/Profile';
import Contact from 'src/components/Contact';
import AlertColor from 'src/components/Alert';
import DrawerMarker from 'src/components/Drawer';
import PrivateRoute from './PrivateRoute';
>>>>>>> a6854d2e77980528da127f0e42ffd964fd7b3746
import Logo from 'src/img/logo.svg';
import Nav from 'src/containers/Nav';
import Profile from 'src/components/Profile';
import SimpleMap from 'src/components/Map';
import SignIn from 'src/components/SignIn';
import './app.scss';


// == Composant
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {

  render() {
    const {
      Header: AntdHeader,
      Footer: AntdFooter,
      Sider,
      Content,
    } = Layout;

    const { loggedIn } = this.props;

    return (
      <>
        {loggedIn
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
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/map" exact component={SimpleMap} />
                    <Route path="/groupes" exact component={Groups} />
                    <Route path="/evenements" exact component={Events} />
                    <Route path="/profil" exact component={Profile} />
                    <Route path="/contact" exact component={Contact} />
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
                  <Route path="/" exact component={Home} />
                  <Route path="/login" exact component={LoginForm} />
                  <Route path="/inscription" exact component={SignIn} />
                </Content>
              </Layout>
            </div>
          )
        }

      </>
    );
  }
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

// == Export
export default App;
