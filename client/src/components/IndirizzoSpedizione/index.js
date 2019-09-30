import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//actions
import { nextStepAction } from "../../actions";

class IndirizzoSpedizione extends Component {
    handlerChange = () => {

    }
    handlerBlur = () => {

    }
    render(){
        return(
            <>
                <h3>Indirizzo Spedizione</h3>
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
                
                <Link
                    to="/checkout/fatturazione"
                    className="button"
                    onClick={() => this.props.nextStepAction()}
                >
                    Next
                </Link>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(
    mapStateToProps,
    { nextStepAction }
)(IndirizzoSpedizione);
