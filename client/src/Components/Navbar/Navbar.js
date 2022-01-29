import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Login from "../../pages/Login/Login";
import LOGO from "../../img/RAVERSOUTLET.png";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const handleLogout = () =>{
    Auth.logout();
  }

  const [toggleCategories, setToggleCategories] = useState(false);

  const handleToggleCategories = () => {
    if(window.innerWidth) setToggleCategories(!toggleCategories);
  }

  useEffect(()=>{

  })

  return (
    <div className="custom-navbar">
      <div className="logo-ctn">
        <a href="/">
          <img className="navbar-logo" src={LOGO} />
        </a>
      </div>
      <div className="navbar-itmes">
        <div className="navbar-items-left">
          <i className={`fas fa-arrow-down hamburger-menu`} onClick={handleToggleCategories}></i>
          <div className={`navbar-links`} style={toggleCategories ? {display: 'flex'} : {}}>
            <a href="/tops">TOPS</a>
            <a href="/bottoms">BOTTOMS</a>
            <a href="/shoes">SHOES</a>
            <a href="/accessories">ACCESSORIES</a>
          </div>
          <div className="navbar-icons">
            <a href="/shop" className="custom-icon fas fa-search"></a>
            <a href="/cart" className="custom-icon fas fa-shopping-cart"></a>
          </div>
        </div>
        <div className="navbar-items-right">
          {Auth.loggedIn() ? <a onClick={handleLogout} href="/">LOGOUT</a> : 
          <>
            <a href="/login">LOGIN</a>
            <a href="/signup">SIGN UP</a>
          </>
          }
        </div>
      </div>
    </div>
  );
};
export default NavBar;
