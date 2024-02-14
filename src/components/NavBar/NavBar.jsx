import { Button } from 'react-bootstrap';
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <Button>JUEGOS DE MESA</Button>
                <Button>ROMPECABEZAS</Button>
                <Button>ROL</Button>
                <Button>ACCESORIOS</Button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar;