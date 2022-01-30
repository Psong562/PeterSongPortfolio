import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import {Link} from 'react-router-dom'
import "../App.css"


const NavBar = () => {
  return (
    <Navbar className="navBar" expand="lg">
      <Container>
        <Navbar.Brand 
          as={Link}
          to="/">Peter Song</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
