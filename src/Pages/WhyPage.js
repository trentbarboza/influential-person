import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css';
import gonzportrait from '../Photos/gonzportrait.jpg';

export default function WhyPage() {
  return (
    <Container>
    <Row>
      <Col>
      <Row>
        <h1 className='homeText mt-4 text-center'>Why Mark Gonzales?</h1>
      </Row>
        <Row>
        <p className='descText mt-3'>I chose Mark Gonzales because skateboarding has and will always be a huge part of my life. He is known as the creator of "street skating" and since I stepped on a skateboard when I was a child, that's majority of what I was doing. When I turned 13 I began to actually learn how to do tricks. Throughout my whole teenage years, before I had a car, my skateboard was my main form of transportation. It's taken me all over the world, from traveling to different states and skating at skateparks to just riding down the street and grabbing some food at the store. I could always rely on my legs and skateboard to get me there.</p>
        <p className='descText'>
          Not only does Gonz the skateboarder influence me but his artistic side does as well. Since a child, just like most kids, I loved to draw and create things. That has stuck with me throughout my life with photography. Mark isn't the best or most talented artist in the world, some would think he's not nearly even close but that doesn't stop him from creating with top brands such as Adidas & Supreme, it's clear people still love his work. That truly influences me to keep going and to always do what I enjoy. He influences me to just not be stuck in a box to one thing also. That, I myself and we all are capable of doing multiple great things in our time here.
        </p>
        <p className='descText'><strong>Thank You Gonz, -Trent</strong></p>
        </Row>
      </Col>
      <Col>
      <img src={gonzportrait} className="whyPic mt-4"></img>
      </Col>
    </Row>
    </Container>

  )
}
