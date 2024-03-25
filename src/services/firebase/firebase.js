import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from ".";
import { createProductFromFirestore } from "../../adapters/productAdapter";

export const getProducts = (categoryId) => {
    const collectionRef = !categoryId
        ? collection(db, "productos")
        : query(collection(db, "productos"), where("category", "==", categoryId))
    return (getDocs(collectionRef)
        .then((response) => {
            const productAdapted = response.docs.map(doc => {
                return createProductFromFirestore(doc)
            });
            return productAdapted
        })
        .catch(error => { return error }))
}