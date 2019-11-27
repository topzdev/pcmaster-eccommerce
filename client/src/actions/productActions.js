import axios from "axios";

import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SEARCH_PRODUCT,
    UPDATE_PRODUCT,
    PRODUCT_ERROR,
    UPLOAD_IMAGE,
    PRODUCT_LOADING,
    SET_LOADING,
    CLEAR_ERROR,
    CLEAR_SUCCESS
} from "./types";

const config = {
    headers: {
        "Content-type": "application/json"
    }
};

const setLoading = () => dispatch => {
    dispatch({
        type: PRODUCT_LOADING
    });
};

export const getProducts = () => async dispatch => {
    try {
        setLoading();
        const res = await axios.get("/api/product/", config);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
    } catch (err) {
        console.log(err.response.data);
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data
        });
    }
};
export const addProduct = (data, images) => async dispatch => {
    setLoading();
    try {
        const files = Array.from(images);
        const formData = new FormData();

        formData.append("brand", data.brand);
        formData.append("components", data.components);
        formData.append("name", data.name);
        formData.append("sku", data.sku);
        formData.append("barcode", data.barcode);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("overview", data.overview);
        formData.append("tags", JSON.stringify(data.tags));
        formData.append("category", data.category);
        formData.append("description", JSON.stringify(data.description));

        files.forEach((file, i) => {
            formData.append(i, file);
        });

        console.log(formData);

        const res = await axios.post("/api/product/", formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        });

        dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        console.error(err.response.data);
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data
        });
    }
};
export const deleteProduct = id => async dispatch => {
    try {
        setLoading();
        const res = await axios.delete(`/api/product/${id}`);
        dispatch({
            type: DELETE_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        console.log(err.response.data);
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data
        });
    }
};
export const updateProduct = data => async dispatch => {
    const { _id } = data;
    try {
        setLoading();
        const res = await axios.put(`/api/product/${_id}`, data);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data
        });
    }
};
export const searchProduct = id => async dispatch => {
    try {
        const res = await axios.get(`/api/product/${id}`, config);
        console.log(res);
        dispatch({
            type: SEARCH_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        console.log(err.response);
        dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.data
        });
    }
};

export const searchProducts = query => async dispatch => {
    try {
        const res = await axios.get(`/api/product/`, config);
    } catch (err) {}
};

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR
    });
};

export const clearSuccess = () => dispatch => {
    dispatch({
        type: CLEAR_SUCCESS
    });
};
