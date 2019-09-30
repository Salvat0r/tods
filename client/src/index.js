import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//middleware
import thunk from "redux-thunk";
import logger from "redux-logger";
//import formValidationMiddleware from "../src/middleware/formValidationMiddleware";
//reducers
import reducers from "./reducers";
//styles
import "./style.sass";
//components
import App from "./components/App";

const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

