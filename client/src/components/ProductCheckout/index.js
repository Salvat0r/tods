import React, { Component } from "react";
import { connect } from "react-redux";
//actions
import { selectProduct, deleteFromCart, updateItemUnits } from "../../actions";

class ProductCheckout extends Component {
    render() {
        const { id, name, thumbnail, price, sku, units } = this.props;
        return (
            <div className="single-product">
                <div
                    className="delete_product"
                    onClick={() => this.props.deleteFromCart(id)}
                >X</div>
                <div className="column-image">
                    <a
                        title={name}
                        onClick={() => this.props.selectProduct(id)}
                    >
                        <img
                            className="thumbnail"
                            src={thumbnail}
                            alt={name}
                        />
                    </a>
                </div>
                <div className="column-detail ">
                    <h6>{name}</h6>
                    <p>{sku}</p>
                    <div className="detail-product">
                        <span className="label">qtà</span>
                        <span>
                            <div
                                className="moreless"
                                onClick={() => this.props.updateItemUnits(id, -1)}
                            >-</div>
                            {units}
                            <div
                                className="moreless"
                                onClick={() => this.props.updateItemUnits(id, +1)}
                            >+</div></span>
                    </div>
                    <div className="row-price">
                        <div className="price-column">
                            € {price},00
                        </div>
                    </div>
                </div>
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
    { selectProduct, deleteFromCart, updateItemUnits }
)(ProductCheckout);
