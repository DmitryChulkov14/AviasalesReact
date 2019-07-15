import React from 'react';

class CurrencyButton extends React.Component {

    render() {
        return(
            <input type="button" id={this.props.id} className="currencyButton" value={this.props.value} onClick={this.props.changeCurrentCurrency}/>
        );
    }
}

export default CurrencyButton;