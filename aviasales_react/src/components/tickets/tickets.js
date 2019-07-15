import React from 'react';
import Ticket from "./ticket/ticket";

import flightData from "../../json/tickets";

class Tickets extends React.Component {

    render() {
        let sortedTickets = flightData.tickets.sort(function (a, b) {
            return a.price - b.price;
        });

        let currentCurrency = this.props.currentCurrency;

        return (
            <div className="tickets">
                {
                    sortedTickets.map(function (item, i) {
                        return (<Ticket key={i} ticket={item} currentCurrency={currentCurrency}/>);
                    })
                }
            </div>
        )
    }
}

export default Tickets;