import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Card.css'

function OneCard({ title, description, price, category, id, image }) {
  return (
    <>
    <Card>
    <Card.Img variant="top" src={image} className='maxh-img' />
    <Card.Body className='mb-4'>
      <Card.Title className='text-white'>{title}</Card.Title>
      <Card.Text className='text-white'>
       
      </Card.Text>
    </Card.Body>
      <div className='d-flex justify-content-between'>
      <Link to="/itemdetails ">
            <button  className='btn-card '>Cumpara</button>
            </Link>
        <button  className='btn-cardfav '><FavoriteBorderIcon/></button>
        </div>
  </Card>
  </>
  )
}

export default OneCard