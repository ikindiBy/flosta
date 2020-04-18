import React from 'react';
import { Link } from "react-router-dom";

import Button from '../Button';

import './ProductTile.css';

const ProductTile = ({
    imageSrc,
    title,
    description,
    price,
    type,
    id,
    inBasket,
    onAddToBAsketClick,
    onRemoveFromBasketClick,
}) => {
    const changeBasketState = () => {
        console.log('_____ changeBasketState __________', inBasket, id);
        inBasket ? onRemoveFromBasketClick(id) : onAddToBAsketClick(id);
    };

    return (
        <div className="product-tile">
            <Link to={`/product/${id}`}>
                <div className="product-tile__image">
                        <img className="tile-image"
                        src={imageSrc}
                        alt="Image of Tile + descrition"/>
                    
                </div>
            </Link>
            <div className="product-tile__description">
                <h4>{title}</h4>
                <p>{description}</p>
                <span>Price: {price}</span>
                {type ? <span>Type: {type}</span> : null}
                <Button
                    text={!inBasket ? "Add to basket" : "Remove from basket"}
                    className={`product-tile__button ${inBasket ? "product-tile__button--added" : ""}`}
                    onClick={changeBasketState}
                />
            </div>
        </div>
    )
};

export default ProductTile;