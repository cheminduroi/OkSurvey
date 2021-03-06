import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <Navbar bg="transparent" variant="dark">
        <Navbar.Brand as={Link} to="/">OKS</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="">Surveys</Nav.Link>
        </Nav>
        </Navbar>
    );
}

export default Navigation;