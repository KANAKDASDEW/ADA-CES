import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Provider } from 'react-redux'
import { store } from '../src/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

    <Provider store={store}>
    <App />
  </Provider>,
    
);
