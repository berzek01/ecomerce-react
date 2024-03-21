import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const collectionRef = categoryId
        ? query(collection(db, "productos"), where("category", "==", categoryId))
        : collection(db, "productos")
        
        getDocs(collectionRef).then((querySnapshot)=>{
            console.log(querySnapshot);
            const products = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            console.log(products)
            setProducts(products)
        }).catch(error => alert(error));
    }, [categoryId]);

    return (
        <div style={{ display: "grid" }}>
            <h2 style={{ margin: '2rem auto' }}>{greeting}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer