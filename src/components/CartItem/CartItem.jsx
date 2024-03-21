const CartItem = ({id, name, price, quantity})=>{
    return (
        <>
        <ul>
            <li>{name}, Precio: S/{price}, Cantidad:{quantity} Total:S/{price*quantity}</li>
        </ul>
        </>
    );
}

export default CartItem;