import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <>
    {['sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className=" fixed-top mb-3">
        <Container fluid>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/bees-logo.jpeg"
              width="100"
              height="70"
              className="d-inline-block align-top"
              style={{objectFit:'contain'}}
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to='/home'>Acasa</NavLink>
                <NavLink to='/tei'>Tei</NavLink>
                <Nav.Link href="#action2">Salcam</Nav.Link>
                <Nav.Link href="#action2">Poliflora</Nav.Link>
                <Nav.Link href="#action2">Utilaje</Nav.Link>
                <Nav.Link href="#action2">Login</Nav.Link>
                <Nav.Link href="#action2">Sign in</Nav.Link>
                <Nav.Link href="#action2">Logout</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  )
}

export default Header