import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = ({ greeting }) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        getDoc(doc(db, "productos", itemId))
            .then((querySnapshot) => {
                const product = { id: querySnapshot.id, ...querySnapshot.data() }
                setProduct(product);
            })
            .catch(error => console.error(error))
            .finally(_=> setLoading(false))
    }, []);

    return (
        <div style={{ display: "grid" }}>
            <h2 style={{ margin: '2rem auto' }}>{greeting}</h2>
            {loading ? <h1>Cargando... </h1> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer