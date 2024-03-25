import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import Titulo from "../General/Titulo";

const Cart = ({ greeting }) => {
    const { cart, addItem, removeItem, clearCart, totalQuantity, totalPrice } = useCart();
    if (totalQuantity == 0) {
        return (
            <div>
                <Titulo label={greeting} />
                <h3 style={{textAlign: "center"}}>No hay productos en el carrito</h3>
                <div className="d-flex">
                    <Link className='link-custom' to="/" >Volver al home</Link>
                </div>
            </div>
        );
    }
    return (
        <div>
            <Titulo label={greeting} />
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div style={{ border: "1px dotted #000", margin: "10px" }}></div>
            <h4 style={{ textAlign: 'right', marginRight: '10px' }}>Total ${totalPrice}</h4>
            <div className="d-flex mb-1">
                <button className='link-custom bg-danger' onClick={_ => clearCart()}>Limpiar carrito</button>
            </div>
            <div className="d-flex">
                <Link className='link-custom' to={'/checkout'}>Ckeckout</Link>
            </div>
        </div>
    );
};

export default Cart;