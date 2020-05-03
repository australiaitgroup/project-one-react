import React from 'react';
import Logo from '../Logo';
import NavBar from './components/NavBar';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="header__left">
      <Logo />
    </div>
    <div className="header__right">
      <NavBar />
    </div>
  </div>
);

export default Header;
