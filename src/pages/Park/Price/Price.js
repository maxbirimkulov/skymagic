import React from 'react';
import "./Price.scss"
import {Card3d} from "./Card3d/Card3d";
import img1 from "./teens.jpeg"
import img2 from "./childrens.png"
const Price = ({dataPark}) => {
    return (
        <section className="price">
            <Card3d dataPark={dataPark} price={dataPark.price[0]} text="Детский" img={img1}/>
            <Card3d dataPark={dataPark} price={dataPark.price[1]} text="Взрослый" img={img2}/>
        </section>

    );
};

export default Price;