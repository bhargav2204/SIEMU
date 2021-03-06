import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { Router, Switch, Redirect, Route } from "react-router-dom";
import history from "./history";
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
