import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavigationBar() {

  return (
    <Navbar bg="dark"  variant="dark" expand="sm">
    <Container>
        <Navbar.Brand as={Link} to="/">DS Algo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <NavDropdown title="Arrays" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/arrays/prefixSum">Prefix Sum</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/arrays/carryForward">Carry Forward</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/arrays/subarrays">Subarrays</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/arrays/subsequencesAndSubsets">Subsequences And Subsets</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/bitManipulation">Bit Manipulation</Nav.Link>
            <NavDropdown title="Hashing" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/hasing/hashing">Hashing</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Strings" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/strings/strings">Strings</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default NavigationBar;