import React from 'react';
import '../styles/PaintingCard.css';

const PaintingCard = ({ painting }) => {
    return (
        <div className="painting-card">
            <img src={painting.imageUrl} alt={painting.title} className="painting-image" />
            <div className="painting-details">
                <h2 className="painting-title">{painting.title}</h2>
                <p className="painting-artist">{painting.artist}</p>
                <p className="painting-year">{painting.year}</p>
            </div>
        </div>
    );
};

export default PaintingCard;