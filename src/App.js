import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';  
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>


      <Routes>
        <Route path='/' element={<HomePage />} />

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
