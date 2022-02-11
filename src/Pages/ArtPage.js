import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import gonzart1 from '../Photos/gonzart1.jpg';
import gonzart6 from '../Photos/gonzart6.jpg';
import gonzart3 from '../Photos/gonzart3.jpg';
import gonzart4 from '../Photos/gonzart4.png';
import gonzart5 from '../Photos/gonzart5.jpg';

export default function ArtPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='homeText text-center mt-4'>Videos</h1>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5fNKMmWj1TM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
        <Col>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/64GqVAwZzJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/n6qPn_YTcBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
        <Col>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ozwYf4AdhI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
      </Row>



      <Row>
        <Col>
          <h1 className='homeText text-center mt-4'>Art</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel fade className='mt-3 mb-5'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gonzart3}
                alt="First slide"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gonzart1}
                alt="Second slide"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gonzart6}
                alt="Third slide"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gonzart4}
                alt="Fourth slide"
              />

            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gonzart5}
                alt="Fifth slide"
              />
            </Carousel.Item>

          </Carousel>
        </Col>
      </Row>
    </Container>

  )
}
