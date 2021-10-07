import React from 'react';
import {ButtonCalc} from "./component/ButtonCalc/ButtonCalc";

const FrontendCalculatorApp = () => {
    return (
        <div>
            <ButtonCalc text="+" type="white"/>
            <ButtonCalc text="+" type="light-blue"/>
            <ButtonCalc text="+" type="orange"/>
            <ButtonCalc text="+" type="blue"/>
        </div>
    );
};

export default FrontendCalculatorApp;
