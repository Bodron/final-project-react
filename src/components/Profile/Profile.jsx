import React from 'react'
import './Profile.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


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
                <Table striped  hover variant='dark'>
     
        
          <p>1 article</p>
        
      
      <tbody>
        <tr>
          <td> <img
              alt=""
              src="/images/card1.jpg"
              width="100"
              height="100"
              className="d-inline-block align-top "
              style={{objectFit:'contain'}}
            /></td>
          <td className='p-4'>
                Miere de Tei
                 <p>15 Ron</p>
            </td>
          <td className='p-4'><div className='d-flex justify-content-evenly'><button  className='btn-card '>Cumpara</button><button  className='btn-cardfav '>Favorite</button></div>
         </td>
          
        </tr>
        
      </tbody>
    </Table>
    </Tab.Pane>
            <Tab.Pane eventKey="fourth">Fourth tab content</Tab.Pane>
            <Tab.Pane eventKey="five">Five tab content</Tab.Pane>
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