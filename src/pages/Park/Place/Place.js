import React from 'react';
import './Place.scss'
import 'swiper/css';
import PlaceSwiper from "./PlaceSwiper/PlaceSwiper";
const Place = () => {
    return (
        <section className="place">
            <div className="place__container">
                <PlaceSwiper/>
                <div className="place__txt">
                    <h2 className="place__title">DRONE <br/> LIGHT SHOWS</h2>
                    <p className="place__p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatem!
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Place;