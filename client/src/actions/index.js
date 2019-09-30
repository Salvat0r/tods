import { 
PRODUCTS_LOADED,
SELECT_PRODUCT,
CLEAR_PRODUCT,
ADD_TO_CART,
UPDATE_ITEM_UNITS,
DELETE_FROM_CART,
DISPLAY_CART,
SUB_TOTAL,
NEXT_STEP,
COPY_ADDRESS,
OK_PAYMENT,
SHIPPING_VALUES,
BILLING_VALUES,
CREDIT_CARD_VALUES,
CLEAR_PAYMENT
} from "./constTypes";

import Products from "../apis/Products";
import Payment from "../apis/Payment";

export const loadsProducts = () => async dispatch => {
    const promise = await Products.get('/?_limit=5&_page=1');
    dispatch({
        type: PRODUCTS_LOADED,
        payload: promise.data
    });
};

export const selectProduct = (id) => async dispatch => {
    const promise = await Products.get(`/${id}`);
    dispatch({
        type: SELECT_PRODUCT,
        payload: promise.data
    });
};

export const clearProduct = () => {
    return {
        type: CLEAR_PRODUCT
    }
}

export const addToCart = ({ id, name, sku, price, thumbnail, units = 1 }) => async dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: { id, name, sku, price, thumbnail, units }
    })
    dispatch({
        type: DISPLAY_CART
    })
}
export const deleteFromCart = ( idToDelete )  => {
    return {
        type: DELETE_FROM_CART,
        payload: { idToDelete }
    }
}
export const updateItemUnits = (idToUpdate, units) => {
    return {
        type: UPDATE_ITEM_UNITS,
        payload: { idToUpdate, units }
    }
}

export const displayCart = () => {
    return {
        type: DISPLAY_CART
    }
}

export const subTotal = (subtotal) => {
    return {
        type: SUB_TOTAL,
        payload: subtotal
    }
}

export const nextStepAction = step => dispatch => {
    dispatch({
        type: NEXT_STEP,
        payload: step
    });
};

export const checkPayment = (order) => async dispatch => {
    const promise = await Payment.get('/');
    dispatch({
        type: OK_PAYMENT,
        payload: promise.data
    });
};

export const clearPayment = () => {
    return {
        type: CLEAR_PAYMENT
    };
};

export const copyAddress = (copy) => {
    return {
        type: COPY_ADDRESS,
        payload: copy
    }
}