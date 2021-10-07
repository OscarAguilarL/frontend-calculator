import React from 'react';

import './FrontendCalculatorApp.css';

import {ButtonCalc} from "./component/ButtonCalc/ButtonCalc";

const FrontendCalculatorApp = () => {
    return (
        <div className="calculator">

            <div className="calculator-screen">
                <p className="smallResult">234234</p>
                <p className="result">123123123</p>
            </div>

            <div className="buttonRow">
                <ButtonCalc text="C" type="orange"/>
                <ButtonCalc text="+/-" type="white"/>
                <ButtonCalc text="%" type="white"/>
                <ButtonCalc text="/" type="light-blue"/>
            </div>
            <div className="buttonRow">
                <ButtonCalc text="7" type="white"/>
                <ButtonCalc text="8" type="white"/>
                <ButtonCalc text="9" type="white"/>
                <ButtonCalc text="X" type="light-blue"/>
            </div>
            <div className="buttonRow">
                <ButtonCalc text="4" type="white"/>
                <ButtonCalc text="5" type="white"/>
                <ButtonCalc text="6" type="white"/>
                <ButtonCalc text="-" type="light-blue"/>
            </div>
            <div className="buttonRow">
                <ButtonCalc text="1" type="white"/>
                <ButtonCalc text="2" type="white"/>
                <ButtonCalc text="3" type="white"/>
                <ButtonCalc text="+" type="light-blue"/>
            </div>
            <div className="buttonRow">
                <ButtonCalc text="0" type="white"/>
                <ButtonCalc text="." type="white"/>
                <ButtonCalc text="del" type="light-blue"/>
                <ButtonCalc text="=" type="blue"/>
            </div>
        </div>
    );
};

export default FrontendCalculatorApp;
