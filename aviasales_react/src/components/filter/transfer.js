import React from 'react';

import Checkbox from './checkbox'

class Transfer extends React.Component {

    render() {
        return(
            <div>
                <div>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <div className="transferOptions">
                    <Checkbox id={'all'} name={'Все'} checked={true}/>
                    <Checkbox id={'direct'} name={'Без пересадок'}/>
                    <Checkbox id={'one-transfer'} name={'1 пересадка'}/>
                    <Checkbox id={'two-transfers'} name={'2 пересадки'}/>
                    <Checkbox id={'three-transfers'} name={'3 пересадки'}/>
                </div>
            </div>
        );
    }
}

export default Transfer;