import React, { useState } from 'react';
import { connect } from 'react-redux';

import InputCounter from '../InputCounter/InputCounter';


import {
    addToBasketAction,
    removeFromBasketAction,
    changeQuantityAction
} from '../../actions';

import Button from '../Button';
import Carousel from '../Carousel/Carousel';

import './DetailPage.css';  

const _DetailPage = (props) => {
    const {
        match: {
            params,
        },
        addToBasket,
        removeFromBasket,
        products,
        changeQuantity,
    } = props;

    const [amountOnDP, setAmountOnDP] = useState(0);

    const currentID = parseInt(params.id, 10);
    const product = products.find(product => product.productId === currentID);
    const { inBasket, quantityInBasket } = product;

    const changeBasketState = () => {
        if (inBasket) {
            removeFromBasket(currentID);
            changeQuantity(currentID, 0);
        } else {
            changeQuantity(currentID, amountOnDP);
            addToBasket(currentID);
        }
    };

    const changeAmount = (amount) => {
        setAmountOnDP(amount);
    };

    return (
        <div className="detail-page__container">
            <div className="detail-page__top-container">
                <Carousel product={product} />
                <div className="detail-page__main-description">

                        <h2>{product.title}</h2>
                        <InputCounter onInputChange={changeAmount} quantityInBasket={amountOnDP}/>
                        <Button
                            text={!inBasket ? "Add to basket" : "Remove from basket"}
                            className={`detail-page__button ${inBasket ? "detail-page__button--added" : ""}`}
                            onClick={changeBasketState}
                        />
                        <div className="detail-page__description-short">
                            <h3>Основные параметры</h3>
                            <ul>
                                <li>Время цветения: 6-9 </li>
                                <li>Высота растения: 25см</li>
                                <li>Диаметр куста: 30см </li>
                                <li>Размер соцветия: 3см </li>
                                <li>Морозостойкость: слабая </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="detail-page__description-block">
                <div className="detail-page__description-block-left">
                    <h3>Посадка</h3>
                    <ul>
                        <li>Время посадки: </li>
                        <li>Расстояние между растениями: </li>
                        <li>Освещенность: яркий солнечный свет </li>
                        <li>Почва: плодородная, чернозем, слабокислая </li>
                    </ul>
                    <h3>Интересные особенноси</h3>
                    <ul>
                        <li>Медонос</li>
                        <li>Привлекает бабочек</li>
                        <li>Пик аромата в вечернее время</li>
                    </ul>
                </div>
                <div className="detail-page__description-block-right">
                    <h3>Уход</h3>
                    <ul>
                        <li>Полив: </li>
                        <li>Обрезка/прищипывание: 1 раз в 2 недели</li>
                        <li>Возможные вредители: тля</li>
                        <li>Возможные болезни: фитофтора </li>
                    </ul>
                </div>
            </div>
            
            <br/>
            <strong>
                Похожие: (ряд тайлов)
            </strong>
            <br/>
            <strong>
                Сним хорошо комбинировать: (ряд тайлов)
            </strong>
            <br/>
            <strong>
                Статьи на тему: (ряд превью тайлов)
            </strong>
            <br/>
            <strong>
                Примеры использования (фото):
            </strong>
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.productsReducer.products,
})

const mapDispatchToProps = dispatch => ({
    addToBasket: id => dispatch(addToBasketAction(id)),
    removeFromBasket: id => dispatch(removeFromBasketAction(id)),
    changeQuantity: (id, quantity) => dispatch(changeQuantityAction(id, quantity)),
})

export default connect(mapStateToProps, mapDispatchToProps)(_DetailPage)
