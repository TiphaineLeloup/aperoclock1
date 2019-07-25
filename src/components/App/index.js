// == Import : npm
import React from 'react';
import { Layout } from 'antd';

// == Import : local
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Dashboard from 'src/components/Dashboard';
import './app.scss';

// == Composant
const App = () => {
  const {
    Header: AntdHeader,
    Footer: AntdFooter,
    Sider,
    Content,
  } = Layout;

  return (
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
            <Dashboard />
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
