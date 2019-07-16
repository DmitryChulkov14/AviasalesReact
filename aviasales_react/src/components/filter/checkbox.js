import React from 'react';
import {connect} from "react-redux";

class Checkbox extends React.Component {

    state = {
        isChecked: this.props.id === 'all',
    };

    handleChange = () => {
        this.setState({isChecked: !this.state.isChecked},
            () => {
                if (this.state.isChecked) {
                    this.props.onAddStop(this.props.id);
                } else {
                    this.props.onDeleteStop(this.props.id);
                }
            });
    };

    render() {
        return (
            <div>
                <div className="transferCheckBox">
                    <input type="checkbox"
                           id={this.props.id}
                           onChange={this.handleChange}
                           checked={this.state.isChecked}/>
                    <label htmlFor={this.props.id}>{this.props.name}</label>
                    <label name="only" htmlFor={this.props.id}></label>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        stops: state.stops,
    }),
    dispatch => ({
        onAddStop: (stop) => {
            dispatch({type: 'ADD_STOP', stop});
        },

        onDeleteStop: (stop) => {
            dispatch({type: 'REMOVE_STOP', stop});
        }
    })
)(Checkbox);