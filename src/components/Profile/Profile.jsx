import React, { useEffect } from 'react'
import './Profile.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FavouriteCard from '../../features/FavouriteCard/FavouriteCard';
import { useStateValue } from '../../StateProvider';
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {object, ref ,string} from 'yup'
import {getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate  } from 'react-router-dom';

const registerSchema = object({
  firstName: string().required('Please tell us your first name'),
  lastName: string().required('Please tell us your last name'),
});

function Profile() {
  const navigate = useNavigate();
  const {register,handleSubmit,formState:{errors}} = useForm({resolver: yupResolver(registerSchema)})

  function onSubmit(values){
    const { firstName, lastName } = values;
    const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: `${lastName} ${firstName}`, 
          }).then(() => {
            toast.success("Profile updated complete")
            dispatch({
              type: 'SET_USER',
              user: auth.currentUser,
            })
            navigate('/home')
         }).catch((error) => {
            toast.error(error.message)    
    });
  }


  

  const [{favourites,user}, dispatch] = useStateValue()
  console.log(user)
  console.log({favourites})
  return (
    <div>
        <div className='mb-5 p-5'></div>
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
                    <p className='text-white-50'>{user?.displayName}</p>
                    <p className='text-white-50'>{user?.email}</p>
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
              
                {favourites?.map((item)=>(
                    <FavouriteCard
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    />
                ))}
             
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <Form>
            <h4 className='text-white mb-5'>Adresses</h4>
          <Form.Group className="mb-3" controlId="adressName">
        <Form.Label className='text-white bold'>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" className='blackInput' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adressSurname">
        <Form.Label className='text-white bold'>Surnames *</Form.Label>
        <Form.Control type="password" placeholder="Surnames" className='blackInput' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adressPhoneNumber">
        <Form.Label className='text-white bold'>Telephone number </Form.Label>
        <Form.Control type="password" placeholder="Telephone number" className='blackInput' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adressLocation">
        <Form.Label className='text-white bold'>Address * </Form.Label>
        <Form.Control type="password" placeholder="Address"  className='blackInput'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="adressCountry">
        <Form.Label className='text-white bold'>Country</Form.Label>
        <Form.Control type="password" placeholder="Country" className='blackInput' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adressState">
        <Form.Label className='text-white bold'>State/Province</Form.Label>
        <Form.Control type="password" placeholder="State/Province" className='blackInput' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adressCity">
        <Form.Label className='text-white bold'>City</Form.Label>
        <Form.Control type="password" placeholder="City" className='blackInput' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="adressZip">
        <Form.Label className='text-white bold'>Zip code</Form.Label>
        <Form.Control type="password" placeholder="Zip code" className='blackInput' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="defaultBilling">
        <Form.Check type="checkbox" label="Use as my default billing address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="defaultShipping">
        <Form.Check type="checkbox" label="Use as my default shipping address" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="five">
             <Form onSubmit={handleSubmit(onSubmit)}>
            <h4 className='text-white mb-5'>Personal information</h4>
          <Form.Group className="mb-3" >
        <Form.Label className='text-white bold'>Name</Form.Label>
        <Form.Control type="text"  id='firstName' placeholder="FirstName"  {...register('firstName')} className='blackInput'/>
        {errors.firstName && <p className='errofield'>{errors.firstName.message}</p>}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className='text-white bold'>Surnames *</Form.Label>
        <Form.Control type="text" id='lastName' placeholder="LastName"  {...register('lastName')}className='blackInput'/>
        {errors.lastName && <p className='errofield'>{errors.lastName.message}</p>}
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
     
    </div>
  )
}

export default Profile