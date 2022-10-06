import React from 'react';
import "./Price.scss"

const Price = () => {
    return (
        <section className="hero-section">
            <div className="card-grid container">
                <a className="card card2" href="#">
                    <div className="card__background"></div>
                    <div className="card__content">
                        <p className="card__category">Category</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                    </div>
                </a>
                <a className="card card3" href="#">
                    <div className="card__background"></div>
                    <div className="card__content">
                        <p className="card__category">Category</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                    </div>
                </a>

            </div>
        </section>
    );
};

export default Price;