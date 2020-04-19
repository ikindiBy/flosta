import React from 'react';
import Button from '../Button';
import InputCounter from '../InputCounter/InputCounter';


const BasketItem = ({product, removeFromBasket, changeQuantity}) => {
    const { title, imageSrc, price, productId, quantityInBasket } = product;

    const removeItem = () => {
        removeFromBasket(productId);
    };

    const changeAmount = (amount) => {
        changeQuantity(productId, amount);
    };

    return (
        <div className='basket-item'>
            <img
                    src={`${process.env.PUBLIC_URL}${imageSrc}`}
                    alt="Image of DetailPage + descrition"
            />
            <span>{title}</span>
            <span>{price}</span>
            <InputCounter onInputChange={changeAmount} quantityInBasket={quantityInBasket}/>
            <span>{quantityInBasket * price}</span>
            <Button
                    text="Remove"
                    className="basket-item__remove-button"
                    onClick={removeItem}
            />
        </div>
    )
};

export default BasketItem;

