import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from "react-router-dom";

//actions
import { nextStepAction, subTotal } from "../../actions";
//components
import ProductCheckout from "../ProductCheckout";
import ProgressBar from '../ProgressBar';
import IndirizzoSpedizione from "../IndirizzoSpedizione";
import IndirizzoFatturazione from "../IndirizzoFatturazione";
import DettagliPagamento from "../DettagliPagamento";

class Checkout extends Component {
    componentWillUnmount = () => {
        this.props.nextStepAction(1);
    }
    subtotalAmount = (cart) => {
        return cart.reduce((acum, item) => {
            acum += item.price * item.units;
            this.props.subTotal(acum);
            return acum;
        }, 0);
    }
    render(){
        const { cart, order } = this.props;
        if (this.props.payment.confirmation) {
            return (<Redirect to={'/grazie'} order={order} />)
        }   
        return(
            <div>
                <h1>Checkout</h1>
                <div className="inner_checkout">
                    {cart.map((product, key) =>
                        <ProductCheckout
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
                </div>
                {cart.length > 0 ? 
                    <div className="Form">
                        <ProgressBar />
                        <form autoComplete="off">
                            <BrowserRouter>
                                <Switch>
                                    <Route exact path="/checkout" component={IndirizzoSpedizione} />
                                    <Route path="/checkout/fatturazione" component={IndirizzoFatturazione} />
                                    <Route path="/checkout/pagamento" component={DettagliPagamento} />
                                </Switch>
                            </BrowserRouter>
                        </form>
                    </div>
                    : <h2>Il carrello è vuoto</h2>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.order.cart,
        order: state.order,
        payment: state.payment
    };
};

export default connect(
    mapStateToProps,
    { nextStepAction, subTotal }
)(Checkout);
