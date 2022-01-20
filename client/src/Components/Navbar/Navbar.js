import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar">
        <div className="nav-container">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-logo"
            offset={-80}
          >
            Ravers Outlet
            <i className="fa fa-code"></i>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                // offset={-50}
                activeClass="link-active"
              >
                About
            
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                // offset={-50}
                activeClass="link-active"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                // offset={-50}
                activeClass="link-active"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="resume"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                // offset={-50}
                activeClass="link-active"
              >
                Resume
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
