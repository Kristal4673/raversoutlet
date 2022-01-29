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

  useEffect(() => {});

  return (
    <div className="custom-navbar">
      <div className="logo-ctn">
        <a href="/home">
          <img className="navbar-logo" src={LOGO} />
        </a>
      </div>
      <div className="navbar-itmes">
        <div className="navbar-items-left">
          <i class="fas fa-bars hamburger-menu"></i>
          <div>
            <a href="/tops">TOPS</a>
            <a href="/bottoms">BOTTOMS</a>
            <a href="/shoes">SHOES</a>
            <a href="/accessories">ACCESSORIES</a>
          </div>
          <a href="/shop">SEARCH</a>
        </div>
        <div className="navbar-items-right">
          <a href="/login">LOGIN</a>
          <a href="/signup">SIGN UP</a>
          <a href="/">LOGOUT</a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
