import React from 'react';
import { connect } from 'react-redux';

import InputCounter from '../InputCounter/InputCounter';


import {
    addToBasketAction,
    removeFromBasketAction,
    changeQuantityAction
} from '../../actions';

import Button from '../Button';

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

    const currentID = parseInt(params.id, 10);

    const product = products.find(product => product.productId === currentID);

    const { inBasket, quantityInBasket } = product;

    console.log('____________>>', currentID, product);

    const changeBasketState = () => {
        inBasket ? removeFromBasket(currentID) : addToBasket(currentID)
    };

    const changeAmount = (amount) => {
        changeQuantity(currentID, amount);
    };

    return (
        <div className="detail-page__container">
            <div className="detail-page__top-container">
            <div className="detail-page__image-container">
                <img
                    src={`${process.env.PUBLIC_URL}${product.imageSrc}`}
                    alt="Image of DetailPage + descrition"
                />
            </div>
            <div className="detail-page__main-description">
                <h2>{product.title}</h2>
                <InputCounter onInputChange={changeAmount} quantityInBasket={quantityInBasket}/>
                <Button
                    text={!inBasket ? "Add to basket" : "Remove from basket"}
                    className={`detail-page__button ${inBasket ? "detail-page__button--added" : ""}`}
                    onClick={changeBasketState}
                />

            </div>
            </div>
            <h3>Параметры</h3>
            <ul>
                <li>Время цветения: </li>
                <li>Морозостойкость: </li>
                <li>Высота растения:</li>
                <li>Диаметр взрослого растения: </li>
                <li>Размер соцветия: </li>
                <li>Время цветения: </li>
            </ul>
            <h3>Посев семян</h3>
            <ul>
                <li>Время посадки: </li>
                <li>Расстояние между растениями: </li>
                <li>Освещение: яркий солнечный свет </li>
                <li>Почва: плодородная,  </li>
            </ul>
            <h3>Посадка саженца</h3>
            <ul>
                <li>Время посадки: </li>
                <li>Расстояние между растениями: </li>
                <li>Освещение: яркий солнечный свет </li>
                <li>Почва: плодородная,  </li>
            </ul>
            <h3>Уход</h3>
            <ul>
                <li>Полив: </li>
                <li>Обрезка/прищипывание: </li>
                <li>Вредители: </li>
                <li>Болезни: яркий солнечный свет </li>
            </ul>
            <br/>
            <strong>
                Похожие: (ряд тайлов)
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
