import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { removeFromBasketAction, changeQuantityAction } from '../../actions';

import BasketItem from './BasketItem';

import './Basket.css';

const getProductsInBasket = products => products.filter(product => product.inBasket);

const _Basket = ({ productsInBasket, removeFromBasket, changeQuantity }) => {
    // console.log('____ productsInBasket___>> ', productsInBasket);

    const [summ, setSumm] = useState(0);

    const getFullPrice = useCallback(() => {
        let summAllInBasket = productsInBasket.reduce((summ, item) => {
            return summ + item.price * item.quantityInBasket;
        }, 0);

        setSumm(summAllInBasket);
    }, [productsInBasket]);

    useEffect(() => {
        getFullPrice();
    }, [productsInBasket])

    return productsInBasket.length > 0
            ? <div className='basket'>
                {productsInBasket.map(product => 
                    <BasketItem
                        key={product.productId}
                        product={product}
                        removeFromBasket={removeFromBasket}
                        getFullPrice={getFullPrice}
                        changeQuantity={changeQuantity}
                    />
                )}
                <div className='basket__summ-line'>
                    <strong>Summ: {summ}</strong>
                </div>
            </div>
            : <div className='basket--empty'>
                    <p>Basket is empty</p>
            </div>
};

const mapStateToProps = state => ({
    productsInBasket: getProductsInBasket(state.productsReducer.products),
})

const mapDispatchToProps = dispatch => ({
    removeFromBasket: id => dispatch(removeFromBasketAction(id)),
    changeQuantity: (id, quantity) => dispatch(changeQuantityAction(id, quantity)),
})

export default connect(mapStateToProps, mapDispatchToProps)(_Basket);


