import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { FaShoppingCart } from "react-icons/fa";

const CardWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <>
        <Link to={'/cart'}>
            <FaShoppingCart />{totalQuantity}
        </Link>
        </>
    )
}

export default CardWidget;