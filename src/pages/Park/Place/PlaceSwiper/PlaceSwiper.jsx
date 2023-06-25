import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import "./PlaceSwiper.scss";
import "swiper/css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBanners} from "../../../../redux/reducers/banners";
import {useLocation} from "react-router-dom";
import img from './3.jpg'
export default function PlaceSwiper({dataPark}) {

    const dispatch = useDispatch()

    const location = useLocation()


    const {data, error, status} = useSelector((s) => s.banners )

    useEffect(() => {
        dispatch(getBanners({branch:dataPark.branch}))
    }, [location.pathname])


    return (
        <>
            <Swiper
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false
                }}
                loop={true}
                breakpoints={{
                    0: {
                        direction: "horizontal"
                    },
                    768: {
                        direction: "horizontal"
                    }
                }}
                className="swiper place__swiper"
                modules={[Autoplay,Navigation]}
            >
                {data.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={`${process.env.REACT_APP_URL}${slide.images}`} key={index} alt={slide.title}/>
                            <div className="place__txt">
                                <h2 className="place__title">
                                    {slide.title}
                                </h2>
                                <p className="place__p">
                                    {slide.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
