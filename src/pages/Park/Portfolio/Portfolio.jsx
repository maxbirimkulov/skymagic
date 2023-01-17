import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Portfolio.scss"
import { EffectCoverflow} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {getBanners} from "../../../redux/reducers/banners";
const Portfolio = ({dataPark}) => {
    const dispatch = useDispatch()

    const location = useLocation()


    const {data, error, status} = useSelector((s) => s.banners )

    useEffect(() => {
        dispatch(getBanners({branch:dataPark.branch}))
    }, [location.pathname])

    return (
        <section className="portfolio">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                className="mySwiper"
            >
                {data.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={`http://62.113.96.238:4444${slide.images}`} key={index} alt={slide.title}/>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </section>
    );
};

export default Portfolio;

