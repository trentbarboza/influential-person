import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import '../App.css';
import gonzsitting from '../Photos/gonzsitting.jpg';
import gonzthrasher from '../Photos/gonzthrasher.jpg';
import gonzmanual from '../Photos/gonzmanual.png';
import gonzart from '../Photos/gonzart.jpg';

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
              <h2 className='text-center mt-3 homeText'>Vision to ATM Click</h2>
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
              <h2 className='text-center mt-3 homeText'>Deluxe Distribution</h2>
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
              <h2 className='text-center mt-4 homeText'>Influence</h2>
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
              <h2 className='text-center mt-3 homeText'>Art & Writing</h2>
            </Row>
            <Row>
              <p className='descText text-left mt-3'>
              London-based art curator Emma Reeves has explained in an introduction that she wrote for Interview magazine: "He makes art all the time, and he has been making art in some form or another for almost as long as he has been skateboarding. But it's rare to see an actual show of the work". An interview that Reeves completed with Gonzales is also published in Interview and he reveals that he likes creating "zines" the most, as "it is the most free thing to do". In 2008, Drag City released a book called The Collected Fanzines that consists of reproductions of old zines that he created together with director Harmony Korine.
              </p>
              <p className='descText text-left'>
              Gonzales was featured in the music video for the song "West Coast" by Jason Schwartzman's band, Coconut Records; the music video featured a sequence that was originally filmed in 1998 at a German museum, but was edited for the purpose of the music video with Gonzales' permission. Gonzales also directed and appears in the Coconut Records music video "Any Fun", alongside actress Chloë Sevigny and skateboarder Alex Olson.
              </p>
              <p className='descText text-left mb-5'>
              In 2011, Gonzales designed and painted the London Flagship Supreme (brand) Store. Gonzales would send letters to the New York store entitled “Supream” during the early years of the brand. This led to many collaborations with Gonzales and Supreme, with the latest being in the S/S21 collection. Gonzales has designed sculptures and paintings for Supreme's retail locations in New York (Manhattan), San Francisco, London, Paris, Tokyo (Shibuya), Nagoya, and Osaka.
              </p>
            </Row>
          </Col>
          <Col xs="auto">
            <Row>
              <img src={gonzart} className="whoFourthPic mt-4"></img>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>


  );
}
