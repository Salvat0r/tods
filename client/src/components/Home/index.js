import React, { Component } from "react";
import { connect } from "react-redux";
//actions
import { loadsProducts } from "../../actions";
//components
import Product from "../Product";
import ViewPDP from "../PDP";

class Home extends Component {
    componentDidMount = () => {
        this.props.loadsProducts();
    }
    render() {
        const products = Object.values(this.props.products).map((product) => {
            const { id, sku, price, availability, name, thumbnail} = product;
            return( 
                <Product 
                    key={id}
                    id={id} 
                    sku={sku}
                    price={price}
                    availability={availability}
                    name={name} 
                    thumbnail={thumbnail}
                />)
        });
        return (
            <div className="container">
                {this.props.product && <ViewPDP />}
                <div className="products">{this.props.products && products}</div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        products: state.products,
        product: state.product
    };
};

export default connect(
    mapStateToProps,
    { loadsProducts }
)(Home);
