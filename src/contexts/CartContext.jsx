import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            alert('el producto ya exisste');
        }
    };

    const isInCart = (id) => cart.some((prod) => prod.id === id)

    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id === id);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalPrice = () => {
        let price = 0;
        cart.forEach(prod => {
            price += (prod.price*prod.quantity)
        })
        return price;
    }

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity
        })
        console.log(accu)
        return accu
    }

    const totalPrice = getTotalPrice()
    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider
            value={{
                cart,
                isInCart,
                addItem,
                removeItem,
                clearCart,
                totalQuantity,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext)
}
