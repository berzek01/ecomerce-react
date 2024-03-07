import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Link to='/'><img src='./logo.png' width={120}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='navlink-custom' to={'/category/juegoMesa'} href="#home">JUEGOS DE MESA</NavLink>
            <NavLink className='navlink-custom' to={'/category/rompecabezas'} href="#link">ROMPEZABEZAS</NavLink>
            <NavLink className='navlink-custom' to={'/category/rol'} href="#linkk">ROL</NavLink>
            <CardWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;