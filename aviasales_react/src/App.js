import React from 'react';

import Header from './components/header';
import Filter from "./components/filter/filter";
import Tickets from "./components/tickets/tickets";

class App extends React.Component {

    state = {
        currentCurrency: 'RUB',
    };


    changeCurrentCurrency = (currency) => {
        this.setState({
            currentCurrency: currency.target.value}
        ,()=>{
            console.log(this.state.currentCurrency);

        });
    };

    render() {
        return (
            <div className="body">
                <Header/>
                <Filter changeCurrentCurrency={this.changeCurrentCurrency}/>
                <Tickets currentCurrency={this.state.currentCurrency}/>
            </div>
        );
    }
}

export default App;