import React from "react";
import { closeModal } from '../modal/actions';

import { connect} from "react-redux";
class Modal extends React.Component {

    close = () => {
        this.props.dispatch(closeModal());
    };

    render() {
        const { isOpen, title, content } = this.props;

        if (!isOpen) return null;

        return (
            <div className='modal fade in'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>{ title }</h5>
                            <button type='button' className='close' onClick={this.close}>
                                <span>&times;</span>
                            </button>
                        </div>
                        { content }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        isOpen: state.userModalReducer.isOpen,
        title: state.userModalReducer.title,
        content: state.userModalReducer.content,
    }),
) (Modal);