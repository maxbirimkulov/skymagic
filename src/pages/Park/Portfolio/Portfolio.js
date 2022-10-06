import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Portfolio.scss"
import { EffectCoverflow, Pagination } from "swiper";
const Portfolio = () => {
    return (
        <section className="portfolio">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="dsa"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="dsa"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="dsa"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="dsa"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="dsa"/>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Portfolio;

