import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Header() {
  return (
    <Navbar style={{ backgroundColor: '#222', borderBottom: '2px solid #61dafb' }} expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{ color: '#61dafb', fontWeight: 'bold', fontSize: '1.5rem' }}>Yan Victor Steinhaus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="about" smooth={true} duration={500} style={{ color: '#fff' }}>Sobre</Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500} style={{ color: '#fff' }}>Projetos</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} style={{ color: '#fff' }}>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
