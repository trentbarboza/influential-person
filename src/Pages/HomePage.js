import { Container, Row, Col,  } from 'react-bootstrap';
import gonz from '../Photos/gonz.jpg';
import '../App.css';

export default function HomePage () {
    return (
    <Container fluid>
        <Row>
            <Col>
            <h1 className='text-center mt-4 homeText'>Mark 'Gonz' Gonzales</h1>
            </Col>
        </Row>


        <Row>
            <Col>
                <img src={gonz} className="homePic mt-4"></img>
            </Col>
        </Row>

        <Row>
            <Col>
            <p className='descText text-center mt-3'>
                <strong>Mark Gonzales</strong>, also known as "<strong>Gonz</strong>" and "<strong>The Gonz</strong>", is an American professional skateboarder and artist. He is known as a pioneer of modern street skateboarding and was named the "<strong>Most Influential Skateboarder of All Time</strong>" by the Transworld Skateboarding magazine in December 2011. The following year he was inducted ino skateboarding's <strong>Hall of Fame</strong>.
            </p>
            </Col>
        </Row>

    </Container>
    )
}