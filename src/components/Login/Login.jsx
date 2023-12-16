import React from 'react'
import './Login.css'
import Header from '../Header/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../Footer/Footer';
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {object, ref ,string} from 'yup'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify'





const loginSchema = object ({
  email:string().email('The email address is not valuid').required('Please provide an email address'),
  password:string().required('Please type a password').min(4,'The password needs to be at least 4 ch long'),
})



function Login() {

const {register,handleSubmit,formState:{errors}} = useForm({resolver: yupResolver(loginSchema)})

function onSubmit(values)  {
  const {email,password,}= values 
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      toast.success('Login Succesfuly');
    
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      toast.error(errorMessage)
    })
 
   
}

  return (
    <div> 
          <div className='mb-5'></div>
          
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center text-white mb-5'>Login</h1>
        
      
      <Form.Group className="mb-4" >
        <Form.Label className='text-white bold'>Email address</Form.Label>
        <Form.Control type="email" id='email' placeholder="Enter email" {...register('email')}/>
        {errors.email && <p className='errofield'>{errors.email.message}</p>}
      </Form.Group>

      <Form.Group className="mb-4" >
        <Form.Label className='text-white bold '>Password</Form.Label>
        <Form.Control  type="password" id='password' placeholder="Password" {...register('password')} />
        {errors.password && <p className='errofield'>{errors.password.message}</p>}
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          </div>
          <div className='m-5'></div>
    </div>
  )
}

export default Login