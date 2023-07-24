import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

let store = createStore(reducers, window.initialStoreData ? window.initialStoreData : {}, applyMiddleware(...middleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);