import React from 'react';

import './FrontendCalculatorApp.css';

import {ButtonCalc} from "./component/ButtonCalc/ButtonCalc";
import {useCalculator} from "./hooks/useCalculator";

const FrontendCalculatorApp = () => {

    const {
        number,
        previousNumber,
        clean,
        setupNumber,
        positiveNegative,
        btnDel,
        btnDivision,
        btnMultiply,
        btnSubtract,
        btnSum,
        btnPercentage,
        calculate,
    } = useCalculator()

    return (
        <div className="calculator">

            <div className="calculator-screen">
                {previousNumber !== '0' && (
                    <p className="smallResult">{previousNumber}</p>
                )}
                <p className="result">{number}</p>
            </div>

            <div className="buttonRow">
                <ButtonCalc action={clean} text="C" color="orange"/>
                <ButtonCalc action={positiveNegative} text="+/-" color="white"/>
                <ButtonCalc action={btnPercentage} text="%" color="white"/>
                <ButtonCalc action={btnDivision} text="/" color="light-blue"/>
            </div>
            <div className="buttonRow">
                <ButtonCalc action={setupNumber} text="7" color="white"/>
                <ButtonCalc action={setupNumber} text="8" color="white"/>
                <ButtonCalc action={setupNumber} text="9" color="white"/>
                <ButtonCalc action={btnMultiply} text="X" color="light-blue"/>
            </div>
            <div className="buttonRow">
                <ButtonCalc action={setupNumber} text="4" color="white"/>
                <ButtonCalc action={setupNumber} text="5" color="white"/>
                <ButtonCalc action={setupNumber} text="6" color="white"/>
                <ButtonCalc action={btnSubtract} text="-" color="light-blue"/>
            </div>
            <div className="buttonRow">
                <ButtonCalc action={setupNumber} text="1" color="white"/>
                <ButtonCalc action={setupNumber} text="2" color="white"/>
                <ButtonCalc action={setupNumber} text="3" color="white"/>
                <ButtonCalc action={btnSum} text="+" color="light-blue"/>
            </div>
            <div className="buttonRow">
                <ButtonCalc action={setupNumber} text="0" color="white"/>
                <ButtonCalc action={setupNumber} text="." color="white"/>
                <ButtonCalc action={btnDel} text="del" color="light-blue"/>
                <ButtonCalc action={calculate} text="=" color="blue"/>
            </div>
        </div>
    );
};

export default FrontendCalculatorApp;
