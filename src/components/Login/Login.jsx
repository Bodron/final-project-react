import React from 'react'
import './Login.css'
import Header from '../Header/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer/Footer';

function Login() {
  return (
    <div> 
          <div className='mb-5'><Header/></div>
          <div className='container-fluid d-flex align-items-center justify-content-center pt-5 mb-5'>
          <img
              alt=""
              src="/images/bees-logo.jpeg"
              width="400"
              height="200"
              className="d-inline-block align-top img-login"
              style={{objectFit:'contain'}}
            />
          </div>
          <div className='container-md container-formm p-5  '>
          <Form>
            <h1 className='text-center text-white mb-5'>Login</h1>
        
      
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label className='text-white bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label className='text-white bold '>Password</Form.Label>
        <Form.Control  type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </div>
          <div className='m-5'><Footer/></div>
    </div>
  )
}

export default Login