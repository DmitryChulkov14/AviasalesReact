import React from 'react';

import companyLogo from "../../../images/logo.png";
import airplane from "../../../images/airplane.png";
import {connect} from "react-redux";

const moment = require('moment');
require("moment/min/locales.min");

class Ticket extends React.Component {

    getStops = () => {
        switch (this.props.ticket.stops) {
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

    getRatePrice = () => {
        switch (this.props.currency) {
            case 'USD':
                return (this.props.ticket.price * 0.016).toFixed(1);
            case 'EUR':
                return (this.props.ticket.price * 0.014).toFixed(1);
            default:
                return this.props.ticket.price;
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
                        <button className="buy">Купить<br/>за {this.getRatePrice()} {this.props.currency}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        currency: state.currencyReducer.currency,
    }),
) (Ticket);