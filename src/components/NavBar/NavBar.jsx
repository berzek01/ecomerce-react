import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [selectedButton, setSelectedButton] = useState('home');

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const styles = {
    selected: {
      border: '1px solid #000'
    },
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Link to='/'><img src='./logo.png' alt='Logo de la pagina' width={120} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className='navlink-custom'
              style={selectedButton === 'juegoMesa' ? styles.selected : {}}
              to={'/category/juegoMesa'}
              onClick={() => handleClick('juegoMesa')}
              href="#home">JUEGOS DE MESA</NavLink>
            <NavLink
              className='navlink-custom'
              style={selectedButton === 'rompecabezas' ? styles.selected : {}}
              to={'/category/rompecabezas'}
              onClick={() => handleClick('rompecabezas')}
              href="#link">ROMPEZABEZAS</NavLink>
            <NavLink
              className='navlink-custom'
              style={selectedButton === 'rol' ? styles.selected : {}}
              to={'/category/rol'}
              onClick={() => handleClick('rol')}
              href="#linkk">ROL</NavLink>
            <CardWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;