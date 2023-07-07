import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/landing">
          <img className="honey-logo" src="../../img/honey.png" alt="logo" />
          BumbleBee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-grow-1 justify-content-evenly">
            <Nav.Link as={Link} to="/landing">
              Kezdőlap
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Belépés
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Kapcsolat
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
