import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Page from '../Page';
import './App.css';

function App() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__page">
        <Page />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
