import { useState } from "react"
import './ItemCount.css'
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ id, name, description, price, stock }) => {
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const { addItem } = useCart();
    const navigate = useNavigate();
    const increment = () => {
        if (quantity < stock) setQuantity(quantity + 1)
    }
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }
    const handleAdd = (count) => {
        if (added) {
            navigate("/cart");
            return;
        }
        console.log("Agregar al carrito");
        const productObj = {
            id, name, price, quantity: count
        }
        addItem(productObj);
        setAdded(true);
    };

    return (
        <>
            <div className="box">
                <button className="button decrement" onClick={decrement}>-</button>
                <span className="show">{quantity}</span>
                <button className="button increment" onClick={increment}>+</button>
            </div>
            <div style={{ display: 'flex' }}>
                <button className='link-custom' onClick={() => handleAdd(quantity)}>{added ? 'ir al carrito' : 'agregar al carrito'}</button>
            </div>
        </>
    )
}

export default ItemCount