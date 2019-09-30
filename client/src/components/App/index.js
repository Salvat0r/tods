import React from "react";
//navigation
import { BrowserRouter, Route } from "react-router-dom";
//components
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home";
import Checkout from "../Checkout";
import Grazie from "../Grazie";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <div className="main">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/grazie" component={Grazie} />
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
