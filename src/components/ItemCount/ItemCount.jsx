import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ initial, stock }) => {
    const [quantity, setQuantity] = useState(initial);
    const increment = () => {
        if (quantity < stock) setQuantity(quantity + 1)
    }
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }
    return (
        <>
            <div className="box">
                <button className="button decrement" onClick={decrement}>-</button>
                <span className="show">{quantity}</span>
                <button className="button increment" onClick={increment}>+</button>
            </div>
            <div style={{ display: 'flex' }}>
                <button className='add-card' onClick={() => alert(`agregue ${quantity} articulos`)}>agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount