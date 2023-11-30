import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Profile() {
  return (
    <div>
        <div className='mb-5 p-5'><Header/></div>
        <div className='p-5'><h1 className='text-white text-center'>myProfile</h1></div>
        <div className='container-md p-5'>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav  className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className='bold profile-btn'>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='bold profile-btn'>Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='bold profile-btn'>Favourites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className='bold profile-btn'>Addresses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five" className='bold profile-btn'>Personal information</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <div className='row'>
                    <h4 className='text-white mb-5'>Personal information</h4>
                    <h6 className='text-white mb-4'>Contact information</h6>
                    <p className='text-white-50'>Bodron Cosmin</p>
                    <p className='text-white-50'>bodroncosmin98@gmail.com</p>
                    <hr className='white-line'/>
                </div>
                <div className='row'>
                    <h4 className='text-white mb-5'>Adresses</h4>
                    <div className='col-md-6 mb-2'>
                    <h6 className='text-white mb-4'>Default billing address</h6>
                    <p className='text-white-50'>You have not provided a default billing address.</p>
                    <p className='text-white bold'>Add adresses</p>
                    </div>
                    <div className='col-md-6 mb-5'>
                    <h6 className='text-white mb-4'>Default shipping address</h6>
                    <p className='text-white-50'>You have not provided a default shipping address.</p>
                    <p className='text-white bold'>Add adresses</p>
                    </div>
                    <hr className='white-line'/>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <p className='text-white p-talent'>Go Back</p>
                <Button variant="primary" >
                    Submit
                 </Button>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
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
                <div className='d-flex justify-content-evenly'><button  className='btn-card '>Cumpara</button><button  className='btn-cardfav '>Remove Article</button></div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <Form>
            <h4 className='text-white mb-5'>Adresses</h4>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Surnames *</Form.Label>
        <Form.Control type="password" placeholder="Surnames" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Telephone number </Form.Label>
        <Form.Control type="password" placeholder="Telephone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Address * </Form.Label>
        <Form.Control type="password" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Country</Form.Label>
        <Form.Control type="password" placeholder="Country" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>State/Province</Form.Label>
        <Form.Control type="password" placeholder="State/Province" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>City</Form.Label>
        <Form.Control type="password" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Zip code</Form.Label>
        <Form.Control type="password" placeholder="Zip code" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Use as my default billing address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Use as my default shipping address" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="five"> <Form>
            <h4 className='text-white mb-5'>Personal information</h4>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Surnames *</Form.Label>
        <Form.Control type="password" placeholder="Surnames" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white bold'>Telephone number </Form.Label>
        <Form.Control type="password" placeholder="Telephone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Change e-mail address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Change password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </div>
      <Footer/>
    </div>
  )
}

export default Profile