import React from 'react';

import './ButtonCalc.css';

interface Props {
    text: string;
    color: 'white' | 'light-blue' | 'orange' | 'blue',
    action: (textNumber: string) => void,
}

export const ButtonCalc = ({text, color = 'white', action}: Props) => {
    return (
        <button className={`button ${color}`}
                onClick={() => action(text)}>
            <span className="text">{text}</span>
        </button>
    );
};
