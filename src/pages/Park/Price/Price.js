import React from 'react';
import "./Price.scss"

const Price = ({dataPark}) => {
    return (
        <section className="hero-section">
            <div className="card-grid container">
                <div className="card card2">
                    <div className="card__background"></div>
                    <div className="card__content">
                        <p className="card__category">{dataPark.title}</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                        <p className="card__category">для детей от 1-года до 3х лет: </p>
                        <h3 className="card__heading">{dataPark.price[0]}</h3>
                    </div>
                </div>
                <div className="card card3">
                    <div className="card__background"></div>
                    <div className="card__content">
                        <p className="card__category">{dataPark.title}</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                        <p className="card__category">для детей от 4х лет и старше: </p>
                        <h3 className="card__heading">{dataPark.price[1]}</h3>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Price;