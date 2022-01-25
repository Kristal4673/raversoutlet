//Home page
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Raver's Outlet!</h1>
        <p>We provide all of your headbanging gear!</p>
        <div>
          <Button>
            <Link className="link-btn" to="/login">
              Login
            </Link>
            <Link className="link-btn" to="/signup">
              Signup
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
