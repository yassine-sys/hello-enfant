import React from 'react'
import {Card,CardDeck} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

const Creche = () => {
    return (
        <div>
            <h2>CRECHES</h2>
        <CardDeck>
       
  <Card>
    <Card.Img variant="top" src="sport.jpg" width="100%"/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  <Card>
    <Card.Img variant="top" src="dessin.jpg" width="100%"/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  <Card>
    <Card.Img variant="top" src="library.jpg"  />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    
  </Card>
  
</CardDeck>
        </div>
    )
}

export default Creche
