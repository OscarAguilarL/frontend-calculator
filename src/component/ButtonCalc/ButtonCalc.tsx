import React from 'react';

import './ButtonCalc.css';

interface Props {
    text: string;
    type: 'white' | 'light-blue' | 'orange' | 'blue'
}

export const ButtonCalc = ({text, type = 'white'}: Props) => {
    return (
        <button className={`button ${type}`}>
            <span className="text">{text}</span>
        </button>
    );
};
