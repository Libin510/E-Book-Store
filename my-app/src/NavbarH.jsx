import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { SiBookstack } from 'react-icons/si';
import { Button } from "react-bootstrap";

function NavbarH() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="mainnav">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{color:"white"}}> <SiBookstack/>&nbsp; Book Store</Nav>
            <Nav>
            <Button variant="outline-info">
                <Link to="/" style={{textDecoration:"none",color:"white"}}>Login</Link>
                </Button>&nbsp;
                <Button variant="outline-info">
                <Link to="/regi" style={{textDecoration:"none",color:"white"}}>Sign up</Link>
                </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarH;
