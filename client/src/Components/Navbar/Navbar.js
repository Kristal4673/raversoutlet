import React from "react";
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
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="page-width" bg="light">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Ravers Outlet</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-flex-end animate slideIn"
              navbarScroll
            >
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/shop">Shop</Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Shirts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Pants</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Shoes</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex flex-row justify-content-between">
        <div className="input-search-group">
          <InputGroup>
            <FormControl placeholder="Search..." aira-label="Search Bar" />
            <div className="search-icon-style">
              {/* <FontAwesomeIcon icon={faSearch} /> */}
              <i className="fa fa-search"/>
            </div>
          </InputGroup>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex align-items-center p-2 me-2">
            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
            <i className="fa fa-shopping-cart" />
          </div>
          <Button><Link className="link-btn" to="/login">Login</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
