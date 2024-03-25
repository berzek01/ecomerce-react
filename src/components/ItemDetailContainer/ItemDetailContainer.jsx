import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import Titulo from "../General/Titulo";
import Spin from "../General/Spin";
import Alerta from "../General/Alerta";
import { useAlert } from "../../contexts/AlertContext";

const ItemDetailContainer = ({ greeting }) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {alert} = useAlert()
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
        <div>
            <Titulo label={greeting}/>
            <Alerta severity={'danger'} show={alert} message={'Producto ya agregado al carrito'}/>
            {loading ? <Spin/> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer