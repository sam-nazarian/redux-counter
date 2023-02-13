import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; //Provider is a component

import './index.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App component & it's child components will get access to the store
  <Provider store={store}>
    <App />
  </Provider>
);
