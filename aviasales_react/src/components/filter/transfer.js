import React from 'react';

import Checkbox from './checkbox'

class Transfer extends React.Component {

    render() {
        return(
            <div>
                <div>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <div className="transferOptions">
                    <Checkbox id={'all'} name={'Все'} checked={true}/>
                    <Checkbox id={'0'} name={'Без пересадок'}/>
                    <Checkbox id={'1'} name={'1 пересадка'}/>
                    <Checkbox id={'2'} name={'2 пересадки'}/>
                    <Checkbox id={'3'} name={'3 пересадки'}/>
                </div>
            </div>
        );
    }
}

export default Transfer;