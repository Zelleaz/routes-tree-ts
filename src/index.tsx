import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {Provider} from "react-redux";
import {store} from "./store/store";
import './index.scss'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

