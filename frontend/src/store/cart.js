import { fetch } from './csrf';

const initialState = {};

const ADD_TO_CART = "cart/ADD";
const REMOVE_FROM_CART = "cart/REMOVE";
const EMPTY_ON_PURCHASE = "cart/EMPTY";

export const addToCart = (productId) => {
    return {
        type: ADD_TO_CART,
        productId: productId,
    };
};

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        productId: productId,
    };
};

export const emptyOnPurchase = () => {
    return {
        type: EMPTY_ON_PURCHASE,
    };
};
