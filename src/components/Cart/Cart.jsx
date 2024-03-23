import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import Titulo from "../General/Titulo";

const Cart = ({greeting}) => {
    const {cart, addItem, removeItem, clearCart, totalQuantity, totalPrice} = useCart();
    if(totalQuantity == 0){
        return (
            <div>
                <h2>No hay productos en el carrito</h2>
                <Link to="/" >Volver al home</Link>
            </div>
        );
    }
    return (
        <div>
             <Titulo label={greeting}/>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div style={{border: "1px dotted #000", margin: "10px"}}></div>
            <h4>Total ${totalPrice}</h4>
            <button onClick={_=> clearCart()}>Limpiar carrito</button>
            <Link to={'/checkout'}>Ckeckout</Link>
        </div>
    );
};

export default Cart;