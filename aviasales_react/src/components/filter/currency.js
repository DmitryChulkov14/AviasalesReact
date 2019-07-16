import React from 'react';

import CurrencyButton from './currencyButton';

class Currency extends React.Component {

    currencies = ['RUB', 'USD', 'EUR'];

    render() {
        return(
            <div>
                <div className="currencyHeader">ВАЛЮТА</div>
                    <div className="currencyButtons">
                        {this.currencies.map((value, id) => {
                            return (<CurrencyButton key={id} value={value} />);
                        })}
                    </div>
            </div>
        );
    }
}

export default Currency;