import React from 'react';

import companyLogo from "../../../images/logo.png";
import airplane from "../../../images/airplane.png";

const moment = require('moment');
require("moment/min/locales.min");

class Ticket extends React.Component {

    getStops = () => {
        let stops = this.props.ticket.stops;
        switch (stops) {
            case 0:
                return 'БЕЗ ПЕРЕСАДОК';
            case 1:
                return '1 ПЕРЕСАДКА';
            case 2:
                return '2 ПЕРЕСАДКИ';
            case 3:
                return '3 ПЕРЕСАДКИ';
            default:
                return '';
        }
    };

    render() {
        moment.locale('ru');
        let formattedDepartureDate = moment(this.props.ticket.departure_date, "DD.MM.YYYY").format("D MMMM YYYY, dd");
        let formattedArrivalDate = moment(this.props.ticket.arrival_date, "DD.MM.YYYY").format("D MMMM YYYY, dd");

        return(
            <div key={this.props.id} className="ticket">
                <div className="departureInfo">
                    <div className="time">{this.props.ticket.departure_time}</div>
                    <div className="city">{this.props.ticket.origin}, {this.props.ticket.origin_name}</div>
                    <div className="date">{formattedDepartureDate}</div>
                </div>

                <div className="transfer">
                    <div className="stops">{this.getStops()}</div>
                    <div className="transfers">
                        <hr className="line"/>
                        <img src={airplane} className="airplane" alt="Пересадки" />
                    </div>
                </div>

                <div className="arrivalInfo">
                    <div className="time">{this.props.ticket.arrival_time}</div>
                    <div className="city">{this.props.ticket.origin}, {this.props.ticket.destination_name}</div>
                    <div className="date">{formattedArrivalDate}</div>
                </div>
                <div className="buyingForm">
                    <img src={companyLogo} className="companyLogo" alt="Turkish Airlines" />
                    <form className="buyForm" onSubmit={null}>
                        <button className="buy">Купить<br/>за {this.props.ticket.price} {this.props.currentCurrency}</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Ticket;