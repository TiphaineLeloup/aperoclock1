// == Import : npm
import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';

// == Import : local
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Dashboard from 'src/containers/Dashboard';
import LoginForm from 'src/containers/LoginForm';
import Home from 'src/components/Home';
import SignIn from 'src/components/SignIn';
import GroupForm from 'src/components/GroupForm';
import EventForm from 'src/components/EventForm';
import Events from 'src/components/Events';
import Groups from 'src/components/Groups';
import SimpleMap from 'src/components/Map';
import Profile from 'src/components/Profile';
import Contact from 'src/components/Contact';
import AlertColor from 'src/components/Alert';
import PrivateRoute from './PrivateRoute';
import './app.scss';

import data from 'src/data/index';

// == Composant
const App = () => {
  const {
    Header: AntdHeader,
    Footer: AntdFooter,
    Sider,
    Content,
  } = Layout;

  return ( // Trouver comment faire pour que le footer header et content ne s'affiche pas avec la route de "deconnexion" = home
    <div id="app">
      <Route path="/home" exact component={Home} />
      <Layout>
        <Sider>
          <Nav />
        </Sider>
        <Layout>
          <AntdHeader>
            <Header />
          </AntdHeader>
          <Content>
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/map" exact component={SimpleMap} />
            <PrivateRoute path="/groupes" exact component={Groups} />
            <PrivateRoute path="/evenements" exact component={Events} />
            <PrivateRoute path="/profil" exact component={Profile} />
            <PrivateRoute path="/contact" exact component={Contact} />
            <Route path="/login" component={LoginForm} />
          </Content>
          <AntdFooter className="footer">
            <Footer />
          </AntdFooter>
        </Layout>
      </Layout>
    </div>
  );
};

// == Export
export default App;
