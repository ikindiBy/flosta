import React from 'react';
import { useHistory } from 'react-router-dom';

import './ShortDescriptionPlate.css';

import Button from '../Button';

const ShortDescriptionPlate = ({title, description, articleId}) => {
    const history = useHistory();

    const redirectToPage = (e) => {
        console.log('_____________>> ', articleId);
        e.preventDefault();
        history.push(`/page/${articleId}`);
    };
    return (
        <div className="short-description-plate">
            <h3>{title}</h3>
            <p>{description}</p>
            <Button text="Read more..." className="short-description-plate__read-more-button" onClick={redirectToPage}/>
        </div>
    )
};

export default ShortDescriptionPlate;