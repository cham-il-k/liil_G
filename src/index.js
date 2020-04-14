import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import { store, persistStor } from './store/store'
import { history } from './store/reducers'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store = {store}>
  <ConnectedRouter history={history}>
        <PersistGate persistor= {persistStor}>
            <App />
        </PersistGate>
        </ConnectedRouter>        

    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
