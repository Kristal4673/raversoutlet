import React, { useState } from 'react';
import './Navbar.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Login from '../../pages/Login/Login';
import LOGO from '../../img/RAVERSOUTLET.png';

const NavBar = () => {

  const [login, setLogin] = useState(false);

  

  return (
    <div className="custom-navbar">
      <div className='logo-ctn'>
        <img className='navbar-logo' src={LOGO}/>
      </div>
      <div className='navbar-itmes'>
        <div className='navbar-items-left'>
          <a href='/'>TOPS</a>
          <a href='/'>BOTTOMS</a>
          <a href='/'>SHOES</a>
          <a href='/'>ACCESSORIES</a>
          <a className="fas fa-search"></a>
        </div>
        <div className='navbar-items-right'>
          <a href='/'>LOGIN</a>
          <a href='/'>SIGN UP</a>
          <a href='/'>LOGOUT</a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;