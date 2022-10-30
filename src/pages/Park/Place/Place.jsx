import React from 'react';
import './Place.scss'
import 'swiper/css';
import PlaceSwiper from "./PlaceSwiper/PlaceSwiper";

const Place = ({dataPark}) => {
    return (
        <section className="place">
            <div className="place__container">
                <PlaceSwiper dataPark={dataPark}/>
                <div className="place__txt">
                    <h2 className="place__title">
                        {dataPark.title}
                    </h2>
                    <p className="place__p">
                        {dataPark.description}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Place;