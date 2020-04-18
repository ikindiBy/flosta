import React from 'react';

import './Button.css';

const Button = ({text, icon, onClick, className}) => {
    return (
        <button onClick={onClick} className={`button-base ${className}`}>
            {text}
        </button>
    )
};

export default Button;