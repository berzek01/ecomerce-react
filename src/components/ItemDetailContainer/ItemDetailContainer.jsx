import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {

    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => setProduct(response))
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer