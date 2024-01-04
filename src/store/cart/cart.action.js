import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPE } from "./cart.types";

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

export const addItemCart = (cartItems, item) => {
    const newCartItems = addCartItem(cartItems, item);
    return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, item) => {
    const newCartItems = removeCartItem(cartItems, item);
    return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItem, item) => {
    const newCartItems = clearCartItem(cartItem, item);
    return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = (isCartOpen) => createAction(
    CART_ACTIONS_TYPE.SET_IS_CART_OPEN, isCartOpen);