import React from 'react';

import Currencies from './currency';
import Transfer from './transfer';

class Filter extends React.Component {
    render() {
        return(
            <div className="filter">
                <Currencies/>
                <Transfer/>
            </div>
        );
    }
}

export default Filter;