import React, { Component } from "react";
import { connect } from 'react-redux';
//actions
import { selectProduct } from '../../actions';

class Product extends Component {
    render(){
        const {id, sku, price, availability, name, thumbnail } = this.props;
        return (
            <li className={`product ${!availability ? "notavailable" : ""}`} data-code={sku}>
                <a 
                    className="product-link" 
                    onClick={() => this.props.selectProduct(id)}
                    title={name}>
                    <div className="img-container">
                        <img 
                            src={thumbnail} 
                            alt={name} 
                        />
                    </div>
                    <div className="product-text">
                        <h2>{name}</h2>
                        <div className="product-price ">€ {price}</div>
                    </div>
                </a>
            </li>
        );
    }
};

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

export default connect(
    mapStateToProps,
    { selectProduct }
)(Product);
