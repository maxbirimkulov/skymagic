import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Portfolio.scss"
import { EffectCoverflow} from "swiper";
const Portfolio = ({dataPark}) => {
    const slides = dataPark.imgPortfolio
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
                {slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={slide} key={index} alt={dataPark.title}/>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </section>
    );
};

export default Portfolio;

