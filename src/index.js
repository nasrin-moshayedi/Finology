import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../src/Styles/bootstrap.min.css";
import '../src/Styles/style.css';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

