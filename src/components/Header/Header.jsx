import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function Header() {
  return (
    <>
    {['sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className=" fixed-top mb-3">
        <Container fluid>
          <NavLink to="/home">
        <Navbar.Brand >
            <img
              alt=""
              src="/images/bees-logo.jpeg"
              width="100"
              height="70"
              className="d-inline-block align-top img-header"
              style={{objectFit:'contain'}}
            />{' '}
          </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img
              alt=""
              src="/images/bees-logo.jpeg"
              width="100"
              height="70"
              className="d-inline-block align-top img-login"
              style={{objectFit:'contain'}}
            />{' '}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link><NavLink to='/home'>Acasa</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/tei'>Tei</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/salcam'>Salcam</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/poliflora'>Poliflora</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/accesorii'>Accesorii</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/login'>Login</NavLink></Nav.Link>
              <Nav.Link><NavLink to='/signin'>Sign In</NavLink></Nav.Link>
                
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <Stack direction="row" spacing={2}>
                <Avatar>B</Avatar>
                </Stack>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className='bold'><NavLink to='/profile'>Profile</NavLink></Dropdown.Item>
        <Dropdown.Item  className='bold'href="#/action-2">Admin</Dropdown.Item>
        <Dropdown.Item  className='bold'href="#/action-3">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                
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