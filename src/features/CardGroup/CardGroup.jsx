import React from 'react'
import './CardGroup.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Cards() {
  return (
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="images/card1.jpg" />
      <Card.Body>
        <Card.Title className='text-white'>Miere Tei</Card.Title>
        <Card.Text className='text-white'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
        <div className='d-flex justify-content-between'><button  className='btn-card '>Cumpara</button><button  className='btn-cardfav '>Favorite</button></div>
    </Card>
    <Card>
      <Card.Img variant="top" src="images/card1.jpg" />
      <Card.Body>
        <Card.Title className='text-white'>Miere Salcam</Card.Title>
        <Card.Text className='text-white'>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
        <div className='d-flex justify-content-between'><button  className='btn-card '>Cumpara</button><button  className='btn-cardfav '>Favorite</button></div>
    </Card>
    <Card>
      <Card.Img variant="top" src="images/card1.jpg" />
      <Card.Body>
        <Card.Title className='text-white'>Miere Poliflora</Card.Title>
        <Card.Text className='text-white'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
      </Card.Body>
        <div className='d-flex justify-content-between'><button  className='btn-card '>Cumpara</button><button  className='btn-cardfav '>Favorite</button></div>
    </Card>
  </CardGroup>
  )
}

export default Cards