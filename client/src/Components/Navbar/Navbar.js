import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <a
            href="/"
          >
            Ravers Outlet
            <i className="fa fa-code"></i>
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
              href="/products"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/wishlist"
              >
                Wishlist
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/checkout"
              >
                Checkout
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/account-info"
              >
                Account info
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/shop"
              >
                Shop
              </a>
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
