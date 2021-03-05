import React from "react";

//Bootstrap
import { Navbar, Nav } from "react-bootstrap";

//Style
import "./navbar.css";

import { LinkContainer } from "react-router-bootstrap";

export default function NavigationBar({ route }) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand className="navbar-brand">Skladiste</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Stanje</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/FormNalog">
              <Nav.Link>Novi nalog</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/FormProizvod">
              <Nav.Link>Novi proizvod</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
