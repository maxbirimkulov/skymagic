import React from 'react';
import "./Price.scss"
import {useParams} from "react-router-dom";
import smagic from '../../../Layout/Header/Asset 4 (2).png'
import skypark from '../../../Layout/Header/Logo_SKYPARK_2.png'

const Price = ({dataPark}) => {
    let params = useParams()


    return (
        <section className="price">
            <div className="container">
                <h2 className="price__title">
                    <img className={params.name === 'Sky Park'?'price__imageTitleSky':'price__imageTitle'} src={params.name === 'Smagic Tsum'? smagic:params.name==='Sky Park'?skypark:params.name==='Smagic Techno'?smagic:params.name ==='Smagic Tommy'?smagic:''} alt=""/>
                    {params.name ==='Smagic Tsum'? dataPark["description"]:params.name==='Sky Park'?dataPark["description"]:params.name==='Smagic Techno'?dataPark["description"]:params.name ==='Smagic Tommy'?dataPark["description"]:''}

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

        </section>
    );
};

export default Price;