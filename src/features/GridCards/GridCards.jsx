import React, { useState } from 'react';
import './GridCards.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Col, Row } from 'react-bootstrap';
import { useStateValue } from '../../StateProvider';
import { toast } from 'react-toastify'

function GridCards({ title, description, price, category, id, image }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [{},dispatch] = useStateValue()

  const addToFavourites = () => {
    dispatch({
      type:'ADD_TO_FAVOURITES',
      item:{
        id:id,
        title:title,
        price:price,
        image:image,
      }
    })
    toast.success('Ai adaugat produsul la favorite.')
  }
  

  return (
  
    <Card key={id} className="my-3 mx-2 " style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} className='maxh-img' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='descr mb-2'>
          {isCollapsed ? `${description.substring(0, 70)}...` : description}
        </Card.Text>
      </Card.Body>
      <div className='d-flex justify-content-between'>
      
      <Link to={`/itemdetails/${id}`} className="product-link"><button  className='btn-card '>Cumpara</button></Link>
            
        <button  className='btn-cardfav' onClick={addToFavourites}><FavoriteBorderIcon/></button>
        </div>
    </Card>

  );
}

export default GridCards;