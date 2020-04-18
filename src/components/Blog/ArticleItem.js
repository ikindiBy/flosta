import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';

import './ArticleItem.css';



const ArticleItem = ({
    imageSrc,
    title,
    description,
    id,
}) => {
    const history = useHistory();

    const redirectToPage = (e) => {
        console.log('_____________>> ', id);
        e.preventDefault();
        history.push(`/page/${id}`);
    };
    return (
        <div className="article-item">
            <div className="article-item__image">
                    <img
                        class="tile-image"
                        src={imageSrc}
                        alt="Image of Tile + descrition"
                    />
            </div>
            <div className="article-item__description">
                <h3>{title}</h3>
                <p>{description}</p>
                <Button
                    text="Read more..."
                    className="article-item__read-more-button"
                    onClick={redirectToPage}
                />
            </div>
        </div>
    )
};

export default ArticleItem;