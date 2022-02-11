import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhoPage from './Pages/WhoPage';
import { Nav } from 'react-bootstrap';
import WhyPage from './Pages/WhyPage';
import ArtPage from './Pages/ArtPage';

function App() {
  return (
    <BrowserRouter>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item >
          <Nav.Link href="/" className='linkText'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="Who" className='linkText'>Who?</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href='Why' className='linkText'>Why?</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-3" href='Photos' className='linkText'>Videos/Art</Nav.Link>
        </Nav.Item>
      </Nav>


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Who' element={<WhoPage />} />
        <Route path='Why' element={<WhyPage />} />
        <Route path='Photos' element={<ArtPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
