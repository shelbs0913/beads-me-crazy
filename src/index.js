import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cartAddReducer } from './reducers';

let cartStore = createStore(cartAddReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={cartStore}>
    <App />
  </Provider>
);

