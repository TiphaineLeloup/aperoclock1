// == Import : npm
import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';

// == Import : local
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Dashboard from 'src/components/Dashboard';
import LoginForm from 'src/components/LoginForm'; // pas de side menu
import Home from 'src/components/Home'; // pas de side menu
import SignIn from 'src/components/SignIn'; // pas de side menu
import GroupForm from 'src/components/GroupForm';
import EventForm from 'src/components/EventForm';
import Events from 'src/components/Events';
import Groups from 'src/components/Groups';
import TheMap from 'src/components/Map';
import Profile from 'src/components/Profile';
import Contact from 'src/components/Contact';
import AlertColor from 'src/components/Alert';
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
            <Route path="/" exact component={Dashboard} />
            <Route path="/map" exact component={TheMap} />
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
  );
};

// == Export
export default App;
