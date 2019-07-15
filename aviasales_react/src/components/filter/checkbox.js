import React from 'react';

class Checkbox extends React.Component {

    render() {
        return(
            <div>
                <div className="transferCheckBox">
                    <input type="checkbox"
                           id={this.props.id}
                           onChange={null} //TODO
                           defaultChecked={this.props.checked}/>
                    <label htmlFor="{this.props.id}">{this.props.name}</label>
                </div>

            </div>
        );
    }
}

export default Checkbox;