import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import './CartItem.css'

const CartItem = ({id, name, price, quantity})=>{
    const {removeItem} = useCart();
    const deleteCart = (id)=>{
        removeItem(id)
    }
    return (
        <article className="articleCart">
            <header>
                <h2>{name}</h2>
            </header>

            <section>
                <p>Cantidad: {quantity}</p>
                <p>Precio x unidad: S/{price}</p>
            </section>
            <footer>
                <p>Subtotal: S/{price*quantity}</p>
                <button onClick={()=>deleteCart(id)}><FaTrash /></button>
            </footer>
        </article>
    );
}

export default CartItem;