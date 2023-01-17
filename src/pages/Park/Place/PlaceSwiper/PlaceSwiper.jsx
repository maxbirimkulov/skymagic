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
                {/*{data.map((slide, index) => {*/}
                {/*    return (*/}
                {/*        <SwiperSlide key={index}>*/}
                {/*            <img src={`http://62.113.96.238:4444${slide.images}`} key={index} alt={slide.title}/>*/}
                {/*            <div className="place__txt">*/}
                {/*                <h2 className="place__title">*/}
                {/*                    {slide.title}*/}
                {/*                </h2>*/}
                {/*                <p className="place__p">*/}
                {/*                    {slide.text}*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </SwiperSlide>*/}
                {/*    );*/}
                {/*})}*/}
                <SwiperSlide>
                    <img src={img} alt="dsad"/>
                    <div className="place__txt">
                        <h2 className="place__title">
                            Lorem ipsum dolor
                        </h2>
                        <p className="place__p">
                            Lorem ipsuQuidem.
                        </p>
                        <button className="place__btn" type="button">Купить билет</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
