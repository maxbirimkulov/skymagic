import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay,Navigation} from "swiper";
import "./PlaceSwiper.scss";
import "swiper/css";
import img1 from "./3.jpg"
import img2 from "./4.jpg"
export default function PlaceSwiper({dataPark}) {
    // const slides = [...{dataPark}]
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction : false
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
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <img src={img2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt=""/>
                </SwiperSlide>
                {/*{slides.map((slide, index) => {*/}
                {/*    return (*/}
                {/*        <SwiperSlide key={index}>*/}
                {/*            <img src={slide} alt=""/>*/}
                {/*        </SwiperSlide>*/}
                {/*    );*/}
                {/*})}*/}
            </Swiper>
        </>
    );
}
