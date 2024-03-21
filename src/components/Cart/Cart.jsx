import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
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
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h4>Total ${totalPrice}</h4>
            <button onClick={_=> clearCart()}>Limpiar carrito</button>
            <Link to={'/checkout'}>Ckeckout</Link>
        </div>
    );
};

export default Cart;