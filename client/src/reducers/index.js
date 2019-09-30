import { combineReducers } from "redux";
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
    SHIPPING_VALUES,
    BILLING_VALUES,
    CREDIT_CARD_VALUES,
    OK_PAYMENT,
    CLEAR_PAYMENT
} from "../actions/constTypes";

const initialState = {
    error: null,
    product: null,
    products: [],
    displayCart: false,
    step: 1,
    order: {
        cart: [],
        subtotale: 0,
        shipping: {
            name: "",
            country: "IT",
            postalcode: "",
            city: "",
            province: "",
            address: ""
        }, 
        copyShipping: true,
        billing: {
            name_billing: "",
            country_billing: "IT",
            postalcode_billing: "",
            city_billing: "",
            province_billing: "",
            address_billing: ""
        },
        credit_card: {
            number: "",
            expiration_cc: "01/01",
            security_cc: "000",
            name_cc: ""
        }
    },
    confirmationOrder: false
};

const loadsProductsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case PRODUCTS_LOADED:
            return action.payload;
        default:
            return state;
    }
};

const selectProductReducer = (state = initialState.product, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return action.payload;
        case CLEAR_PRODUCT:
            return null;
        default:
            return state;
    }
};

const addToCardReducer = (state = initialState.order.cart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //esiste l'id?
            let existingIndex = findProductIndex(state, action.payload.id);
            //se esiste aggiungi unità
            if (existingIndex !== -1) {
                state[existingIndex].units += 1;
                return state.concat([]);
            }
            //altrimenti concatena lo stato
            return state.concat(action.payload);

        case UPDATE_ITEM_UNITS:
            let existingItemIndex = findProductIndex(state, action.payload.idToUpdate);
            if (state[existingItemIndex].units === 0 && action.payload.units === -1) {
                break;
            }
            state[existingItemIndex].units += action.payload.units;
            return state.concat([]);

        case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.idToDelete);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
        default:
            return state;
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
};


const displayCartReducer = (state = initialState.displayCart, action) => {
    switch (action.type) {
        case DISPLAY_CART:
            return !state;
        default:
            return state
    }
}

const subTotalReducer = (state = initialState.order.subtotale, action) => {
    switch (action.type) {
        case SUB_TOTAL:
            return action.payload;
        default:
            return state
    }
}

const nextStepReducer = (state = initialState.step, action) => {
    switch (action.type) {
        case NEXT_STEP:
            const step = action.payload;
            if (step) {
                return step;
            } else {
                return state + 1;
            }
        default:
            return state;
    }
};

const checkPaymentReducer = (state = initialState.confirmationOrder, action) => {
    switch (action.type) {
        case OK_PAYMENT:
            return action.payload[0];
        case CLEAR_PAYMENT:
            return {payment: false}
        default:
            return state;
    }
};

const copyShippingReducer = (state = initialState.order.copyShipping, action) => {
    switch (action.type) {
        case COPY_ADDRESS:
            return JSON.parse(action.payload)
        default:
            return state;
    }
};

const shippingReducer = (state = initialState.order.shipping, action) => {
    switch (action.type) {
        case SHIPPING_VALUES:
            return action.payload
        default:
            return state;
    }
};

const billingReducer = (state = initialState.order.billing, action) => {
    switch (action.type) {
        case BILLING_VALUES:
            return action.payload
        default:
            return state;
    }
};

const creditCardReducer = (state = initialState.order.credit_card, action) => {
    switch (action.type) {
        case CREDIT_CARD_VALUES:
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    products: loadsProductsReducer,
    product: selectProductReducer,
    displayCart: displayCartReducer,
    step: nextStepReducer,
    order: combineReducers({
        cart: addToCardReducer,
        subtotale: subTotalReducer,
        copyShipping: copyShippingReducer,
        shipping: shippingReducer,
        billing: billingReducer,
        credit_card: creditCardReducer
    }),
    payment: checkPaymentReducer
});