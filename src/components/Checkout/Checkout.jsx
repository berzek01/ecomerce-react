import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { db } from "../../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { Button, Form } from "react-bootstrap";
import './Checkout.css';
import Titulo from "../General/Titulo";

const Checkout = ({ greeting }) => {
    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);

    const { cart, totalQuantity, totalPrice, clearCart } = useCart();
    const createOrder = async () => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    firstName: "Josue",
                    lastName: "Alfaro",
                    phone: "912456785",
                    address: "Jr. space 123"
                },
                items: cart, totalQuantity, totalPrice,
                date: new Date()
            }

            const ids = cart.map((item) => item.id);
            const productRef = collection(db, "productos");
            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids)));

            const { docs } = productsAddedFromFirestore;
            const outOfStock = [];
            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
                console.log('por la rexuxa')
                console.log(stockDb)
                console.log(prodQuantity)
                if (stockDb >= prodQuantity) {
                    //actualizar db
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                console.log(`el id de su  roder es: ${orderAdded.id}`);
                clearCart();
                setOrderCreated(true);
            } else {
                console.log(`Hay productos que estan fuera de stock`);
            }
        } catch (error) {
            console.log("hay productos fuera de stock");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se esta generando su order</h1>
    }

    if (orderCreated) {
        return <h1>La orden fue creada correctamente</h1>
    }

    return (
        <div>
            <Titulo label={greeting}/>
            <Form onSubmit={createOrder} className="form-center">
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>Ingrese su nombre</Form.Label>
                    <Form.Control type="text" placeholder="nombre" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Ingrese su apellido</Form.Label>
                    <Form.Control type="text" placeholder="apellido" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Ingrese su telefono</Form.Label>
                    <Form.Control type="tel" placeholder="555 555 555" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Ingrese su correo</Form.Label>
                    <Form.Control type="email" placeholder="example@example.com" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Realizar compra
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;