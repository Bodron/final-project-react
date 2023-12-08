import React from 'react'
import './Admin.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Admin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
    <div className='mb-5 p-5'><Header/></div>
    <div className='p-5'><h1 className='text-white text-center'>Admin Panel</h1></div>
    <div className='container-md p-5'>

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav  className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" className='bold profile-btn'>All items</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" className='bold profile-btn'>Add new Item</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <h4 className='text-white mb-4'>All items</h4>
                <div className='mb-4'>
                    
                <Form.Select aria-label="Default select example">
                    <option value="0" >All items</option>
                    <option value="1">Tei</option>
                    <option value="2">Salcam</option>
                    <option value="3">Poliflora</option>
                    <option value="4">Accesorii</option>
                </Form.Select>
                </div>
                <div className='row mb-4'>
                <div className='col'>
                <img
              alt=""
              src="/images/card1.jpg"
              width="200"
              height="150"
              className="d-inline-block align-top "
              style={{objectFit:'contain'}}
            />
                </div>
                <div className='col d-flex align-items-start justify-content-center flex-column'>
                  <h5 className='text-white'>Title Product</h5>
                  <p  className='text-white'>150 Ron</p>
                </div>
                <div className='col-md-5 d-flex align-items-start justify-content-center flex-column'>
                <div className='d-flex justify-content-evenly'><button  className='btn-card'>Delete</button><button  className='btn-cardfav'  onClick={handleShow}>Update</button></div>
                <Modal show={show} onHide={handleClose}>
                     <Modal.Header closeButton>
                     <h4 className='text-white mb-5'>Update item</h4>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
           
          <Form.Group className="mb-3" controlId="updateAdminTitle">
        <Form.Label className='text-white bold'>Titlu</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="updateAdminDescription">
        <Form.Label className='text-white bold'>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="updateAdminPrice">
        <Form.Label className='text-white bold'>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="updateAdminCategory">
        <Form.Label className='text-white bold'>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="updateAdminImage">
        <Form.Label className='text-white bold'>Image</Form.Label>
        <Form.Control type="file" placeholder="Category" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
      Update
      </Button>
    </Form>            
  </Modal.Body>
      </Modal>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
               
                <Form>
            <h4 className='text-white mb-5'>Add new item</h4>
          <Form.Group className="mb-3" controlId="adminTitle">
        <Form.Label className='text-white bold'>Titlu</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adminDescription">
        <Form.Label className='text-white bold'>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adminPrice">
        <Form.Label className='text-white bold'>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adminCategory">
        <Form.Label className='text-white bold'>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adminImage">
        <Form.Label className='text-white bold'>Image</Form.Label>
        <Form.Control type="file" placeholder="Category" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </div>
      <Footer/>
    </div>
  )
}

export default Admin