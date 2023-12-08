import React, { useState } from 'react'
import './SignIn.css'
import Header from '../Header/Header'
import Button from 'react-bootstrap/Button';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {object, ref ,string} from 'yup'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  
} from 'firebase/auth'

import { toast } from 'react-toastify'



const registerSchema = object({
  email:string().email('The email address is not valuid').required('Please provide an email address'),
  password:string().required('Please type a password').min(4,'The password needs to be at least 4 ch long'),
  firstName: string().required('Please tell us your first name'),
  lastName: string().required('Please tell us your first name'),
});



function SignIn() {
  const {register,handleSubmit,formState:{errors}} = useForm({resolver: yupResolver(registerSchema)})

  function onSubmit(values) {
    const { email, password, firstName, lastName } = values;
    const auth = getAuth();
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        toast.success('Register succesfuly')
        // Updatează profilul cu displayName format din firstName și lastName
        updateProfile(user, {
          displayName: `${firstName} ${lastName}`,
        })
          .then(() => {
            // Profilul a fost actualizat cu succes
            console.log('User profile updated successfully');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Firebase Authentication Error:', errorCode, errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage)
      });
  }


  
  return (
    <div> 
          <div className='mb-5'><Header/></div>
          <div className='container-fluid d-flex align-items-center justify-content-center pt-5'>
          <img
              alt=""
              src="/images/bees-logo.jpeg"
              width="400"
              height="200"
              className="d-inline-block align-top img-login"
              style={{objectFit:'contain'}}
            />
          </div>
          <div className='container-md container-formm p-5 '>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center text-white mb-5'>Sign Up</h1>
          <Form.Group className="mb-3" >
        <Form.Label className='text-white bold'>First name</Form.Label>
        <Form.Control type="text" id='firstName' placeholder="FirstName"  {...register('firstName')} />
        {errors.firstName && <p className='errofield'>{errors.firstName.message}</p>}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className='text-white bold'>Last name</Form.Label>
        <Form.Control type="text" id='lastName'  placeholder="SecondName"  {...register('lastName')} />
        {errors.lastName && <p className='errofield'>{errors.lastName.message}</p>}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className='text-white bold'>Email address</Form.Label>
        <Form.Control type="email" id='email' placeholder="Enter email"  {...register('email')}/>
        {errors.email && <p className='errofield'>{errors.email.message}</p>}
        <Form.Text className="text-white-50">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='text-white bold'>Password</Form.Label>
        <Form.Control type="password" id='password' placeholder="Password"  {...register('password')}/>
        {errors.password && <p className='errofield'>{errors.password.message}</p>}
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

export default SignIn