import React from 'react';
import './Square.css';

interface Prop {
    value : string;
    onClick : (val : string) => void;
}


export const Square: React.FC<Prop> = (prop) => {

    return (
        <button
            className="square" 
            onClick={() => prop.onClick(prop.value)}            
        >
            {prop.value}
        </button>
    ) ;
}