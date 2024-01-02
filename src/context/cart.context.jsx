import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, item) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...item, quantity: 1 }];
};

const removeCartItem = (cartItems, item) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== item.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, item) => {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart : () => {},
    removeCartItem: () => {},
    cartCount: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);



    useEffect(()=> {
        const newCartCount = cartItems.reduce(
            (total, item) => total + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, item) => total + item.quantity * item.price, 0)
        setCartTotal(newCartTotal);

    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount,
        removeItemFromCart, cartTotal, clearItemFromCart }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}