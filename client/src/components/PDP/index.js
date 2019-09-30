import React, { Component } from "react";
import { connect } from "react-redux";
//actions
import { loadsProducts, clearProduct, addToCart } from "../../actions";
//components

class ViewPDP extends Component {
    state={
        primaryImage: 0
    }
    render() {
        const { availability, description, image, name, price, sku } = this.props.product;
        const { primaryImage } = this.state;
        return (
            this.props.product && 
                <div className="ViewPDP">
                    <button 
                        className="close"
                        onClick={() => this.props.clearProduct()}
                    >x</button>
                    <div className="product-details">
                        <div className="thumb-container">
                            <ul className="thumb-template">
                                {image.map((img, id) => 
                                    <li 
                                        key={id}
                                        className="img-container"
                                        onClick={() => this.setState({primaryImage: id})}
                                    >
                                        <img src={img} alt={name} />
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="product-primary-image">
                            <img src={image[primaryImage]} alt={name} />
                        </div>
                        <div className="text-container">
                            <div className="sku">SKU: {sku}</div>
                            <div className="title">
                                <h1>{name}</h1>
                                <div className="price">€ {price},00</div>
                            </div>
                            <div className="description">
                                {description}
                            </div>
                            {!availability && <p className="error">Non disponibile</p>}
                            <button 
                                disabled={!availability} 
                                className="button"
                                onClick={() => this.props.addToCart(this.props.product)}
                            >Aggiungi al Carrello</button>
                        </div>
                    </div>
                </div>          
        );
    }
};

const mapStateToProps = state => {
    return {
        product: state.product
    };
};

export default connect(
    mapStateToProps,
    { loadsProducts, clearProduct, addToCart }
)(ViewPDP);
