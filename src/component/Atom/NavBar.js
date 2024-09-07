import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../../css/styles.css';

// navbar with menu 

const NavBar = () => {

  console.log('navbar')

  return ( 
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#">Home</Nav.Link> */}
            {/* <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#" disabled>Disabled</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar