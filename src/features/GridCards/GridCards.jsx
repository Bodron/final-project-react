import React from 'react';
import './GridCards.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function GridCards({ title, description, price, category, id, image }) {
  return (
    <Card className="my-3 mx-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        
      </Card.Body>
      <div className='d-flex justify-content-between'>
          <Link to="/itemdetails">
            <button className='btn-card'>Cumpara</button>
          </Link>
          <button className='btn-cardfav '><FavoriteBorderIcon /></button>
        </div>
    </Card>
  );
}

export default GridCards;