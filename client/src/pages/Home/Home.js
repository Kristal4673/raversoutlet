//Home page
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="hero-title">Raver's Outlet</h1>
        <p className="h4">We provide all of your headbanging gear!</p>
        <div>
          <Button>
            <Link className="link-btn" to="/login">
              Login
            </Link>
          </Button>
          <Button>
            <Link className="link-btn" to="/signup">
              Sign up
            </Link>
          </Button>
        </div>
        <Button>
          <Link className="link-btn" to="/shop">
            START SHOPPING
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
