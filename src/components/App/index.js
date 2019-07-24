// == Import : npm
import React from 'react';

// == Import : local
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <header className="header">
      <Header />
    </header>
    <nav className="nav">
      <Nav />
    </nav>
    {/* <main className="content">
      *contenu*
    </main> */}
    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
