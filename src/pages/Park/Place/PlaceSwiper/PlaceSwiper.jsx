import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import "./PlaceSwiper.scss";
import "swiper/css";

export default function PlaceSwiper({dataPark}) {
    const slides = dataPark.imgFirstSection
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 4000,
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
                {slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={slide} key={index} alt={dataPark.title}/>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
