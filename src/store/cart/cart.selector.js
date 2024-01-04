import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0   )
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity * item.price, 0   )
);