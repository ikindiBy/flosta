import React from 'react';
import { connect } from 'react-redux';

import { addToBasketAction, removeFromBasketAction } from '../../actions';

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
    } = props;

    const product = products.find(product => product.productId === parseInt(params.id, 10));

    const { inBasket } = product;

    console.log('____________>>', +params.id, product);

    const changeBasketState = () => {
        console.log('_______ --- _____>>', params.id);
        inBasket ? removeFromBasket(+params.id) : addToBasket(+params.id)
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

// const mapStateToProps = state => {};

const mapStateToProps = state => ({
    products: state.productsReducer.products,
})

const mapDispatchToProps = dispatch => ({
    addToBasket: id => dispatch(addToBasketAction(id)),
    removeFromBasket: id => dispatch(removeFromBasketAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(_DetailPage)
