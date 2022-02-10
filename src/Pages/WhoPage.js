import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import '../App.css';
import gonzsitting from '../Photos/gonzsitting.jpg';
import gonzthrasher from '../Photos/gonzthrasher.jpg';
import gonzmanual from '../Photos/gonzmanual.png';

export default function WhoPage() {
  return (
    <Container>
      <Col>
        <Row>
          <Col><img src={gonzsitting} className="whoFirstPic mt-4"></img></Col>
          <Col>
            <Row>
              <h1 className='text-center mt-4 homeText'>Who is Mark Gonzales?</h1>
            </Row>
            <Row>
              <p className='descText text-left mt-3'>
                Gonzales was born on June 1, 1968 in South Gate, California.
                He entered the skateboarding scene at the age of thirteen. At the age of fifteen, as Tommy Guerrero and Natas Kaupas were developing their own styles of progressive street skating around the same time, Gonzales adopted a more modern, innovative approach to skateboarding in a street context (subsequently dubbed "street skateboarding"). He was featured on the cover of Thrasher magazine's November 1984 issue, at the age of sixteen, while performing a trick known as a "beanplant".
              </p>
            </Row>
          </Col>
        </Row>
      </Col>


      <Col>
        <Row>
          <Col>
            <Row>
              <h1 className='text-center mt-3 homeText'>Vision to ATM Click</h1>
            </Row>
            <Row>
              <p className='descText text-left mt-3'>
                Shortly after his Thrasher magazine cover, Gonzales then joined the Vision skateboard team and attained the status of a professional skateboarder. Gonzales won the 1985 Oceanside street contest while sponsored by Vision.
              </p>
              <p className='descText text-left'>
                Gonzales proceeded to further influence the progression of street skateboarding with the 1991 Blind Skateboards video Video Days (a company he formed with Steve Rocco in 1989).
              </p>
              <p className='descText text-left'>
                Gonzales left Blind after experiencing frustrations that were similar to his time with Vision and then started another company called ATM Click and followed it with a venture with Ron Chatman called 60/40 who sponsored future Menace skaters Fabian Alomar and Joey Suriel. In 1993, Gonzales created controversy after he appropriated a Vision design that was used for one of his signature model boards for an ATM Click design; Gonzales then proceeded to also use the graphic for Real and Krooked signature skateboard models following his move to Deluxe Distribution.
              </p>
            </Row>
            <Row>
              <h1 className='text-center mt-3 homeText'>Deluxe Distribution</h1>
            </Row>
            <Row>
              <p className='descText text-left mt-3'>
                Under the Deluxe Distribution company, Gonzales skated for Real Skateboards and appeared in three of the company's videos: Kicked Out of Everywhere, Non Fiction, and Real to Reel. In 2002, Gonzales then launched Krooked Skateboards in partnership with the Deluxe company and, as of February 2016, Krooked is an operational company that has released four full-length videos.
              </p>
              <p className='descText text-left'>
                In 2007, Gonzales appeared in the skateboarding video game EA Skate and filmed a commercial to promote the game's release.
              </p>
            </Row>
          </Col>
          <Col xs="auto">
            <Row>
              <img src={gonzthrasher} className="whoSecondPic mt-4"></img>
            </Row>
          </Col>
        </Row>
      </Col>


      <Col>
        <Row>
          <Col><img src={gonzmanual} className="whoThirdPic mt-4"></img></Col>
          <Col>
            <Row>
              <h1 className='text-center mt-4 homeText'>Influence</h1>
            </Row>
            <Row>
              <p className='descText text-left mt-3'>
                In the summer of 1986 Gonzales performed an ollie from one wall down to another platform at The Embarcadero in San Francisco, U.S. and the obstacle had been known as the "Gonz Gap" since his completion of the trick; the trick also helped to popularize The Embarcadero as a location for skateboarders to skateboard. Later that year, Gonzales - along with fellow progressive street skater Natas Kaupas - was the first person to skate handrails. Gonzales was also the first person to ollie the Wallenberg Set, a four-block, nineteen feet-long, four feet-tall gap in San Francisco, California.
              </p>
              <p className='descText text-left'>
                In 2006 Gonzales was awarded the Legend Award by Transworld Skateboarding, and the magazine selected him as the most influential skateboarder of all time (followed by Tony Hawk and Rodney Mullen) in December 2011.
              </p>
            </Row>
          </Col>
        </Row>
      </Col>



      <Col>
        <Row>
          <Col>
            <Row>
              <h1 className='text-center mt-3 homeText'>Art & Writing</h1>
            </Row>
            <Row>
              <p className='descText text-left mt-3'>
                Shortly after his Thrasher magazine cover, Gonzales then joined the Vision skateboard team and attained the status of a professional skateboarder. Gonzales won the 1985 Oceanside street contest while sponsored by Vision.
              </p>
              <p className='descText text-left'>
                Gonzales proceeded to further influence the progression of street skateboarding with the 1991 Blind Skateboards video Video Days (a company he formed with Steve Rocco in 1989).
              </p>
              <p className='descText text-left'>
                Gonzales left Blind after experiencing frustrations that were similar to his time with Vision and then started another company called ATM Click and followed it with a venture with Ron Chatman called 60/40 who sponsored future Menace skaters Fabian Alomar and Joey Suriel. In 1993, Gonzales created controversy after he appropriated a Vision design that was used for one of his signature model boards for an ATM Click design; Gonzales then proceeded to also use the graphic for Real and Krooked signature skateboard models following his move to Deluxe Distribution.
              </p>
            </Row>
          </Col>
          <Col xs="auto">
            <Row>
              <img src={gonzthrasher} className="whoSecondPic mt-4"></img>
            </Row>
          </Col>
        </Row>
      </Col>




    </Container>


  );
}
