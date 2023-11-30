import React from 'react'
import './GridCards.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function GridCards({imageUrl}) {
  return (
    <>
      <Row xs={2} md={4} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-between'><button  className='btn-card '>Cumpara</button><button  className='btn-cardfav '>Favorite</button></div>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default GridCards