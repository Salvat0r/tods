import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//actions
import { subTotal, displayCart } from "../../actions";
//components
import ProductCart from "../ProductCart";

class Cart extends Component {
    subtotalAmount = (cart) => {
        return cart.reduce((acum, item) => {
            acum += item.price * item.units;
            this.props.subTotal(acum);
            return acum;
        }, 0);
    }
    render() {
        const { cart } = this.props;
        return (
            <div className="inner_cart">
                {cart.map((product, key) => 
                    <ProductCart 
                        id={product.id} 
                        key={key} 
                        name={product.name} 
                        thumbnail={product.thumbnail} 
                        price={product.price} 
                        sku={product.sku} 
                        units={product.units}
                    />
                )}
                <div className="subtotale">
                    <div className="subtotale_text">SUBTOTALE</div>
                    <div className="subtotale_price">€ {this.subtotalAmount(cart)},00</div>
                </div>
                <Link
                    to="/checkout"
                    className="button"
                    onClick={() => this.props.displayCart()}
                >
                    Procedi Col Checkout
                </Link>
                <button 
                    className="close_cart"
                    onClick={() => this.props.displayCart()}
                >chiudi</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        cart: state.order.cart
    };
};

export default connect(
    mapStateToProps,
    { subTotal, displayCart }
)(Cart);
