import React from 'react';
import {connect} from "react-redux";

class CurrencyButton extends React.Component {

    currentCurrencyChange = (currency) => {
        this.props.onCurrentCurrencyChange(currency);
    };

    render() {
        return(
            <input type="button" id={this.props.id} className="currencyButton" value={this.props.value} onClick={() => this.currentCurrencyChange(this.props.value)}/>
        );
    }
}

export default connect(
    state => ({
        currency: state.currency,
    }),
    dispatch => ({
        onCurrentCurrencyChange: (currency) => {
            dispatch({ type: 'CHANGE_CURRENCY', currency});
        }
    })
) (CurrencyButton);