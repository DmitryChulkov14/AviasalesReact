import React from "react";
import {closeModal} from "./actions";
import {connect} from "react-redux";

class SuccessModal extends React.Component {

    close = () => {
        this.props.dispatch(closeModal());
    };

    render() {
        return (
            <div>
                <div className='modal-body'>
                    Билеты успешно куплены!
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-primary' onClick={this.close}>OK</button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
) (SuccessModal);