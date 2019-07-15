import React from 'react';

import Currencys from './currency';
import Transfer from './transfer';

class Filter extends React.Component {
    render() {
        return(
            <div className="filter">
                <Currencys changeCurrentCurrency={this.props.changeCurrentCurrency}/>
                <Transfer/>
            </div>
        );
    }
}

export default Filter;