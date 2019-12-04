import {
    ADD_CART,
    REMOVE_CART,
    UPDATE_CART,
    ADD_WISHLIST,
    REMOVE_WISHLIST,
    TOGGLE_NAV
} from "../types";

export const addToCart = (data, quantity) => async dispatch => {
    let cart = {
        _id: data._id,
        name: data.name,
        quantity,
        price: data.price,
        img: data.img
    };

    console.log(cart);
    dispatch({
        type: ADD_CART,
        payload: {
            data: cart,
            msg: { type: "success", msg: "Cart Added" }
        }
    });
    dispatch({
        type: REMOVE_WISHLIST,
        payload: {
            data: cart._id
        }
    });
};

export const removeCart = id => dispatch => {
    dispatch({
        type: REMOVE_CART,
        payload: {
            data: id,
            msg: { type: "success", msg: "Cart Removed" }
        }
    });
};

export const updateCart = (id, value) => dispatch => {
    console.log(value);
    dispatch({
        type: UPDATE_CART,
        payload: {
            data: { id, value },
            msg: { type: "success", msg: "Cart Removed" }
        }
    });
};

export const addWishlist = data => dispatch => {
    const { name, price, img, _id } = data;
    let wishlist = {
        name,
        price,
        img,
        price,
        _id
    };
    dispatch({
        type: ADD_WISHLIST,
        payload: {
            data: wishlist,
            msg: { type: "success", msg: "Wishlist Added" }
        }
    });
};

export const removeWishlist = id => dispatch => {
    dispatch({
        type: REMOVE_WISHLIST,
        payload: {
            data: id,
            msg: { type: "success", msg: "Wishlist Removed" }
        }
    });
};

export const toggleNav = () => dispatch => {
    dispatch({
        type: TOGGLE_NAV
    });
};
