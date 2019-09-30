import React, { Component } from "react";
import { connect } from "react-redux";

//actions
import { checkPayment } from "../../actions";

class DettagliPagamento extends Component {
    handlerSubmit = (e) => {
        e.preventDefault();
        this.props.checkPayment(this.props.order)
    }
    render() {
        return (
            <div>
                <h3>Dettagli Pagamento</h3>
                <div className="fields">
                    <div className="input credit_card">
                        <label forHtml="credit_card">Numero Carta di Credito <sup>*</sup></label>
                        <input
                            type="text"
                            name="credit_card"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                        />
                        {this.props.error && <p>Campo richiesto!</p>}
                    </div>
                    <div className="input expiration_cc">
                        <label forHtml="expiration_cc">Data di Scadenza <sup>*</sup></label>
                        <input
                            type="text"
                            name="expiration_cc"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                            placeholder="AA/MM"
                        />
                        {this.props.error && <p>Campo richiesto!</p>}
                    </div>
                    <div className="input security_cc">
                        <label forHtml="security_cc">Codice di Sicurezza <sup>*</sup></label>
                        <input
                            type="text"
                            name="security_cc"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                            placeholder="000"
                        />
                        {this.props.error && <p>Campo richiesto!</p>}
                    </div>
                    <div className="input name_cc">
                        <label forHtml="name_cc">Nome e Cognome <sup>*</sup></label>
                        <input
                            type="text"
                            name="name_cc"
                            onChange={this.handlerChange}
                            onBlur={this.handlerBlur}
                        />
                        {this.props.error && <p>Campo richiesto!</p>}
                    </div>
                </div>
                <button
                    className="button"
                    onClick={this.handlerSubmit}
                    type="submit"
                >
                    Procedi al Pagamento
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.order
    };
};

export default connect(
    mapStateToProps,
    { checkPayment }
)(DettagliPagamento);
