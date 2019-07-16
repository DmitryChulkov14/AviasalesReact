import React from 'react';
import Ticket from "./ticket/ticket";

import flightData from "../../json/tickets";
import {connect} from "react-redux";

class Tickets extends React.Component {

    render() {
        let sortedTicketsByStops = [];
        this.props.stops.forEach(stop => {
           if (stop === 'all') {
               sortedTicketsByStops = flightData.tickets;
           } else {
               flightData.tickets.forEach(ticket => {
                   if (ticket.stops == stop) {
                       sortedTicketsByStops.push(ticket);
                   }
               });
           }
        });

        let sortedTicketsByPrice = sortedTicketsByStops.sort(function (a, b) {
            return a.price - b.price;
        });

        return (
            <div className="tickets">
                {
                    sortedTicketsByPrice.map(function (item, i) {
                        return (<Ticket key={i} ticket={item}/>);
                    })
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        stops: state.stopsReducer,
    }),
) (Tickets);