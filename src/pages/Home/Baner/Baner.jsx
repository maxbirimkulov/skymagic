import React, {useEffect} from 'react';
import './Baner.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative} from "swiper";
import "swiper/css/effect-creative";
import {Autoplay} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../../../redux/reducers/events";
import {Link} from "react-router-dom";

const Baner = () => {
    const {data} = useSelector(s =>s.events)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEvents())

    }, [])
    return (
        <section className='banner'>
            <div className="banner__container container">
                <div className="banner__slider">
                    <Swiper
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ["100%", 0, 0],
                            },
                        }} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                        modules={[Autoplay, EffectCreative]}
                        className="banner__swiper"
                    >
                        {data.map((el)=>(
                            <SwiperSlide key={el} className={"banner__title"}>
                                <h2 className='banner__smagic'>
                                    {el.title}
                                </h2>
                                <h2 className="banner__smagic">
                                    {el.title2}
                                </h2>

                                <h4 className='banner__text'>
                                    {el.description}
                                </h4>

                                <Link  to='/ticket'><button className='banner__btn'>Купить билет</button></Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Baner;