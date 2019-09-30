import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//actions
import { nextStepAction, copyAddress } from "../../actions";

class IndirizzoFatturazione extends Component {
    state={
        copyAddress: false
    }
    handlerCopyAddress = (e) => {
        this.props.copyAddress(e.currentTarget.value);
        this.setState({ copyAddress: true})
    }
    render() {
        return (
            <div>
                <h3>Indirizzo Fatturazione</h3>
                <p>L'indirizzo di fatturazione è uguale all'indirizzo di spedizione?</p>
                <div className="fields">
                    <div className="radio copyAddress">
                        <label forHtml="copyAddress">SI
                            <input type="radio" name="copyAddress" value={true} onChange={this.handlerCopyAddress}/>
                        </label>
                        <label forHtml="copyAddress">NO
                            <input type="radio" name="copyAddress" value={false} onChange={this.handlerCopyAddress}/>
                        </label>
                    </div>
                </div>
                {!this.props.copyShipping && 
                <div className="fields">
                    <div className="input name">
                        <label forHtml="name">Nome e Cognome <sup>*</sup></label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                        />
                        {this.props.error && <p>Campo richiesto!</p>}
                    </div>
                    <div className="input country">
                        <label forHtml="country">Nazione <sup>*</sup></label>
                        <input
                            type="text"
                            name="country"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                        />

                    </div>
                    <div className="input address">
                        <label forHtml="address">Indirizzo <sup>*</sup></label>
                        <input
                            type="text"
                            name="address"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                        />
                    </div>
                    <div className="input postalcode">
                        <label forHtml="postalcode">CAP <sup>*</sup></label>
                        <input
                            type="text"
                            name="postalcode"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                        />
                    </div>
                    <div className="input province">
                        <label forHtml="province">Provincia <sup>*</sup></label>
                        <input
                            type="text"
                            name="province"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                        />
                    </div>
                    <div className="input city">
                        <label forHtml="city">Città <sup>*</sup></label>
                        <input
                            type="text"
                            name="city"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                        />
                    </div>
                </div>
                }
                {this.state.copyAddress &&
                    <Link
                        to="/checkout/pagamento"
                        onClick={() => this.props.nextStepAction()}
                        className="button"
                    >
                        Next
                    </Link>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        copyShipping: state.order.copyShipping
    }
};

export default connect(
    mapStateToProps,
    { nextStepAction, copyAddress }
)(IndirizzoFatturazione);