import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Productos from './Productos';
import Acerca from './Acerca';
import './App.css';
import facebookIcon1 from './imagenes/REDES/facebook1.png';
import facebookIcon2 from './imagenes/REDES/facebook2.png';
import instagramIcon1 from './imagenes/REDES/instagram1.png';
import instagramIcon2 from './imagenes/REDES/instagram2.png';
import twitterIcon1 from './imagenes/REDES/twitter1.png';
import twitterIcon2 from './imagenes/REDES/twitter2.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [facebookIcon, setFacebookIcon] = useState(facebookIcon1);
  const [instagramIcon, setInstagramIcon] = useState(instagramIcon1);
  const [twitterIcon, setTwitterIcon] = useState(twitterIcon1);

  const handleMouseOver = (socialMedia) => {
    switch (socialMedia) {
      case 'facebook':
        setFacebookIcon(facebookIcon2);
        break;
      case 'instagram':
        setInstagramIcon(instagramIcon2);
        break;
      case 'twitter':
        setTwitterIcon(twitterIcon2);
        break;
      default:
        break;
    }
  };

  const handleMouseOut = (socialMedia) => {
    switch (socialMedia) {
      case 'facebook':
        setFacebookIcon(facebookIcon1);
        break;
      case 'instagram':
        setInstagramIcon(instagramIcon1);
        break;
      case 'twitter':
        setTwitterIcon(twitterIcon1);
        break;
      default:
        break;
    }
  };

  const fecha = new Date().toLocaleDateString();
  const hora = new Date().toLocaleTimeString();

  return (
    <Router>
      <header>
        <h2 className="logo">Zapatería El Buen Pie</h2>
        <button className="mostrar-menu" onClick={toggleMenu}>
          &#8801;
        </button>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Inicio</Link>
          <Link to="/productos" onClick={closeMenu}>Nuestros Productos</Link>
          <Link to="/acerca" onClick={closeMenu}>Acerca de Nosotros</Link>
          <button className="esconder-menu" onClick={toggleMenu}>
            &#215;
          </button>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </main>
      <footer>
        <p>&copy;2024 Purizaca, Querevalu, Villalpando</p>
        <p>Fecha: {fecha} | Hora: {hora}</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img 
              src={facebookIcon} 
              alt="Facebook" 
              onMouseOver={() => handleMouseOver('facebook')} 
              onMouseOut={() => handleMouseOut('facebook')} 
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img 
              src={instagramIcon} 
              alt="Instagram" 
              onMouseOver={() => handleMouseOver('instagram')} 
              onMouseOut={() => handleMouseOut('instagram')} 
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img 
              src={twitterIcon} 
              alt="Twitter" 
              onMouseOver={() => handleMouseOver('twitter')} 
              onMouseOut={() => handleMouseOut('twitter')} 
            />
          </a>
        </div>
      </footer>
    </Router>
  );
}

export default App;