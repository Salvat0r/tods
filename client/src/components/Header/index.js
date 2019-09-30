import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//actions
import { displayCart } from "../../actions";
//components
import Cart from "../Cart";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <Link
                        to="/"
                    >
                        <div className="logo" />
                    </Link>
                    <div className="center">Header</div>
                    <div 
                        className="cart"
                    >                
                        <FontAwesomeIcon icon={faShoppingCart} size="1x" onClick={() => this.props.displayCart()}/>
                        {this.props.cart.length > 0 && <div className="unitCart">{this.props.cart.length}</div>}
                        {this.props.showCart && <Cart />}
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        cart: state.order.cart,
        showCart: state.displayCart
    };
};

export default connect(
    mapStateToProps,
    { displayCart }
)(Header);
