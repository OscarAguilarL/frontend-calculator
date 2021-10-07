import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/index.css';

import FrontendCalculatorApp from "./FrontendCalculatorApp";

ReactDOM.render(
    <React.StrictMode>
        <FrontendCalculatorApp/>
    </React.StrictMode>,
    document.getElementById('root')
);
