import { createContext, useEffect, useReducer, useState } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const CART_ACTIONS_TYPE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};   


const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTIONS_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };

        case CART_ACTIONS_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };

        default:
            throw new Error(`Unknown action: ${type} in cartReducer`);
    };


}

export const CartProvider = ({children}) => {
    const [{cartItems, isCartOpen,cartCount, cartTotal }, dispatch ] = useReducer(cartReducer, INITIAL_STATE)

    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);



    // useEffect(()=> {
    //     const newCartCount = cartItems.reduce(
    //         (total, item) => total + item.quantity, 0);
    //     setCartCount(newCartCount);
    // }, [cartItems])

    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce(
    //         (total, item) => total + item.quantity * item.price, 0)
    //     setCartTotal(newCartTotal);

    // }, [cartItems])

    const updateCatItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, item) => total + item.quantity, 0);
      
        const newCartTotal = newCartItems.reduce(
                (total, item) => total + item.quantity * item.price, 0);
        
        dispatch(
            createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, 
                { 
                    cartItems: newCartItems, 
                    cartTotal: newCartTotal,
                    cartCount: newCartCount 
                })
          );
        };
        

        

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCatItemsReducer(newCartItems)
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCatItemsReducer(newCartItems);

    }

    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems, productToClear);
        updateCatItemsReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch(
            createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, bool ));
    }


    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItems, 
        cartCount,
        removeItemFromCart, 
        cartTotal, 
        clearItemFromCart }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}