import React from "react";
import { connect } from "react-redux";
import {closeModal, openModal} from "./actions";
import SuccessModal from "./successModal";

class UserModal extends React.Component {

    close = () => {
        this.props.dispatch(closeModal());
    };

    accept = () => {
        this.close();
        this.props.dispatch(openModal({
            title: "Успех!",
            content: <SuccessModal />
        }));
    };

    render() {
        return (
            <div>
                <div className='modal-body'>
                    User
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-secondary' onClick={this.close}>Закрыть</button>
                    <button type='button' className='btn btn-primary' onClick={this.accept}>Подтвердить</button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
) (UserModal);