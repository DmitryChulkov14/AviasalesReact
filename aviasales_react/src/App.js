import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Header from './components/header';
import Filter from "./components/filter/filter";
import Tickets from "./components/tickets/tickets";
import reducers from "./reducers";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {

    render() {
        return (
            <div className="body">
                <Provider store={store}>
                    <Header/>
                    <Filter/>
                    <Tickets/>
                </Provider>
            </div>
        );
    }
}

export default App;