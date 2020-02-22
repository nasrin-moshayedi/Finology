import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../src/Styles/bootstrap-rtl.min.css";
import "../src/Styles/bootstrap.min.css";
import '../src/Styles/style.css';
import { Provider } from "react-redux";
import Store from "./Redux/store/Stre";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";


ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <Provider store={Store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </I18nextProvider>
    , document.getElementById('root'));

