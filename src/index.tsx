import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './i18n';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import store from './store';
import AppWrapper from './AppWrapper/AppWrapper';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <AppWrapper />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
