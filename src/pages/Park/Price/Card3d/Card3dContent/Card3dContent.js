import React from 'react';
import "./Card3dContent.scss"

const Card3dContent = ({price,text,dataPark,img}) => {
    return (
        <div className="price-card">
            <div className="price-card__img">
                <img src={img} alt=""/>
            </div>
            <div className="price-card__txt">
                <h2>{dataPark.title}</h2>
                <h2>{price} <span>цена</span></h2>
                <h2>{text} <span>билет</span></h2>
            </div>
        </div>
    );
};

export default Card3dContent;