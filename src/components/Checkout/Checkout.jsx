import { useRef, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { db } from "../../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { Form } from "react-bootstrap";
import './Checkout.css';
import Titulo from "../General/Titulo";
import Alerta from "../General/Alerta";
import { useAlert } from "../../contexts/AlertContext";
import { useNavigate } from "react-router-dom";
import { useFromData } from "../../hooks/userFormData";

const Checkout = ({ greeting }) => {
    const { alert, callAlert } = useAlert();
    const colorRef = useRef('danger');
    const messageRef = useRef('');
    const { inputs, handleChange } = useFromData();
    const { cart, totalQuantity, totalPrice, clearCart } = useCart();
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if(form.checkValidity() === true) createOrder(event)
    };
    const createOrder = async (event) => {
        event.preventDefault();
        try {
            const objOrder = {
                buyer: {
                    firstName: inputs.firstname,
                    lastName: inputs.lastname,
                    phone: inputs.phone,
                    address: inputs.address
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
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                console.log(`el id de su  orden es: ${orderAdded.id}`);
                clearCart();
                colorRef.current = 'Success';
                messageRef.current = "Compra registrada exitosamente";
                callAlert();
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                colorRef.current = 'Warning';
                messageRef.current = "hay productos fuera de stock";
                callAlert();
            }
        } catch (error) {
            colorRef.current = 'Danger';
            messageRef.current = "ocurrio un error, intente mas tarde";
            callAlert();
        }
    };

    return (
        <div>
            <Titulo label={greeting} />
            <Alerta severity={colorRef.current} show={alert} message={messageRef.current} />
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-center">
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control required type="text" placeholder="Ingresar nombres"
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control required type="text" placeholder="Ingresar apellidos"
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control required type="tel" placeholder="555 555 5555"
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control required type="email" placeholder="example@example.com"
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control as="textarea" rows={2} required
                        value={inputs.name} onChange={handleChange} />
                </Form.Group>
                
                <div className="d-flex">
                    <button className={`link-custom`} type="submit">
                        Realizar compra
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default Checkout;