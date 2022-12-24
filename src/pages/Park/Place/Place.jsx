import React from 'react';
import './Place.scss'
import 'swiper/css';
import PlaceSwiper from "./PlaceSwiper/PlaceSwiper";

const Place = ({dataPark}) => {
    return (
        <section className="place">
            <div className="place__container">
                <PlaceSwiper dataPark={dataPark}/>
            </div>
        </section>
    );
};

export default Place;