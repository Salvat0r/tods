import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//components
import ProductThanks from "../ProductThanks";
//actions
import { clearPayment } from "../../actions";

class Grazie extends Component {
    componentWillUnmount = () => {
        this.props.clearPayment();
        return (<Redirect push to={'/'} />)
    }
    render() {
        const { order } = this.props;
        return (
            <div className="thanks">
                <h1>Grazie</h1>
                <h2 className="success">Ordine Confermato</h2>
                <p>Il suo ordine è stato processato. Qui di seguito un breve riepilogo:</p>
                <div className="inner_riepilogo">
                    {order.cart.map((product, key) =>
                        <ProductThanks
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
                        <div className="subtotale_text">TOTALE</div>
                        <div className="subtotale_price">€ {order.subtotale},00</div>
                    </div>
                </div>
                <div className="indirizzi">
                    <div className="spedizione">
                        <h3>Indirizzo Spedizione</h3>
                        <p>{order.shipping.name}</p>
                    </div>
                    <div className="fatturazione">
                        <h3>Indirizzo Fatturazione</h3>
                        <p>{order.billing.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.order
    }
};

export default connect(
    mapStateToProps,
    { clearPayment }
)(Grazie);