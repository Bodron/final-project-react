import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function OneCard({ title, description, price, category, id, image }) {
  return (
    <>
    <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title className='text-white'>{title}</Card.Title>
      <Card.Text className='text-white'>
       {description}
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