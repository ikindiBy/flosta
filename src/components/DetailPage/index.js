import React from 'react';
import { products } from '../../constants/data';

import './DetailPage.css';  

const DetailPage = (props) => {
    const {
        match: {
            params,
        }
    } = props;

    const product = products.find(product => product.productId === parseInt(params.id, 10));

    console.log('____________>>', +params.id, products);

    return (
        <div className="detail-page__container">
            <h2>{product.title}</h2>
            <div className="detail-page__image-container">
                <img
                    src={`.${product.imageSrc}`}
                    alt="Image of DetailPage + descrition"
                />
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
                Статьи на тему:
            </strong>
            <br/>
            <strong>
                Примеры использования (фото):
            </strong>
        </div>
    );
};

export default DetailPage;
