import React from 'react';
import Button from '../Button';

const InputCounter = ({ onInputChange, quantityInBasket }) => {

    const decreaseAmount = () => {
        if (quantityInBasket > 0) {
            if (quantityInBasket === 1) {
                onInputChange(0);
            } else {
                onInputChange(quantityInBasket - 1);
            }
        }
    };
    const increaseAmount = () => {
        if (quantityInBasket < 999 && quantityInBasket > 0) {
            onInputChange(quantityInBasket + 1);
        } else if (quantityInBasket === 0) {
            onInputChange(1);
        }
    };
    const handleAmountChange = (e) => {
        const amountNumber = parseInt(e.target.value, 10);
        if (e.target.value === '') {
            onInputChange(0);
        } else if (amountNumber < 1000 && amountNumber > 0) {
            onInputChange(amountNumber);
        }
    }

    return (
        <div className='input-counter'>
            <Button
                    text="-"
                    className="input-counter__minus-button"
                    onClick={decreaseAmount}
            />
            <input
                type="number"
                name="amount"
                value={quantityInBasket}
                onChange={handleAmountChange}
            />
            <Button
                    text="+"
                    className="input-counter__add-button"
                    onClick={increaseAmount}
            />
        </div>
    )
};

export default InputCounter;

