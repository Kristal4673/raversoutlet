//Home page
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="display-2">Raver's Outlet!</h1>
        <p className="lead">We provide all of your headbanging gear!</p>
        <div>
          <Button>
            <Link className="link-btn" to="/login">
              Login
            </Link>
          </Button>
          <br />
          <br />
          <Button>
            <Link className="link-btn" to="/signup">
              Sign up!
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
