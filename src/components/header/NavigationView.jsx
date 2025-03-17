import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

const NavigationView = () => {
  return (

<Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/" as={Link}>Fun Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/about" as={Link}>About</Nav.Link>
            <Nav.Link to="/student" as={Link}>Student</Nav.Link>
            <Nav.Link to="/blog" as={Link}>Blogs</Nav.Link>
            <Nav.Link to="/profile" as={Link}>Profile</Nav.Link>
            <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationView