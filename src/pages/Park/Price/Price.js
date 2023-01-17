import React from 'react';
import "./Price.scss"
// import {Card3d} from "./Card3d/Card3d";
// import img1 from "./teens.jpeg"
// import img2 from "./childrens.png"
const Price = ({dataPark}) => {
    return (
        <section className="price">
            <div className="container">
                <h2 className="price__title">
                    {dataPark["full-description"]}
                </h2>
                <div className="price__cards">
                    <div className="price__card">
                        <div className="price__card-price">
                            {dataPark.price[0]}
                            <p className="price__card-money">
                                сом
                            </p>
                        </div>
                        <div className="price__card-text">
                            <div className="price__card-title">Детский билет</div>
                            <div className="price__card-desc">билет от 1 года <br/>до 3х лет</div>
                        </div>
                    </div>
                    <div className="price__card">
                        <div className="price__card-price">
                            {dataPark.price[1]}
                            <p className="price__card-money">
                                сом
                            </p>
                        </div>
                        <div className="price__card-text">
                            <div className="price__card-title">Взрослый билет</div>
                            <div className="price__card-desc">билет от 1 года <br/>до 3х лет</div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Card3d dataPark={dataPark} price={dataPark.price[0]} text="Детский" img={img1}/>*/}
            {/*<Card3d dataPark={dataPark} price={dataPark.price[1]} text="Взрослый" img={img2}/>*/}
        </section>
    );
};

export default Price;