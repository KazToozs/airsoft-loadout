// Card.js
import React from 'react';
import './ItemCard.scss';
import M4Example from '../../assets/images/M4-example.jpeg';

const ItemCard = () => {
    const imgSrc = M4Example

    return (
        <div className="card">
            <img src={imgSrc} alt="TITLE" className="card-image" />
            <div className="card-content">
                Title
            </div>
        </div>
    );
}

export default ItemCard;
