import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs, Mousewheel, Autoplay} from "swiper";
import "./PlaceSwiper.scss";
import "swiper/css";
import img1 from './PlaceSwiperSlide.jpg'
import {useState} from "react";

const slides = [
    "https://picsum.photos/1920/1080",
    img1,
    "https://picsum.photos/1920/1081",
    "https://picsum.photos/1920/1082",
    "https://picsum.photos/1920/1083",
    "https://picsum.photos/1920/1084"
];

export default function PlaceSwiper() {
    const [imagesNavSlider, setImagesNavSlider] = useState(null);

    return (
        <>
            <div className="slider">
                    <div className="slider__col">
                        <div className="slider__prev">^</div>

                        <div className="slider__thumbs">
                            <Swiper
                                onSwiper={setImagesNavSlider}
                                direction="vertical"
                                spaceBetween={24}
                                slidesPerView={3}
                                navigation={{
                                    nextEl: ".slider__next",
                                    prevEl: ".slider__prev"
                                }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction : false
                                }}
                                className="swiper-container1"
                                breakpoints={{
                                    0: {
                                        direction: "horizontal"
                                    },
                                    768: {
                                        direction: "vertical"
                                    }
                                }}
                                modules={[Navigation, Thumbs, Autoplay]}
                            >
                                {slides.map((slide, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="slider__image">
                                                <img src={slide} alt=""/>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>

                        <div className="slider__next">^</div>
                    </div>

                    <div className="slider__images">
                        <Swiper
                            thumbs={{swiper: imagesNavSlider}}
                            mousewheel={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction : false
                            }}
                            navigation={{
                                nextEl: ".slider__next",
                                prevEl: ".slider__prev"
                            }}
                            breakpoints={{
                                0: {
                                    direction: "horizontal"
                                },
                                768: {
                                    direction: "horizontal"
                                }
                            }}
                            className="swiper-container2"
                            modules={[Navigation, Thumbs, Mousewheel, Autoplay]}
                        >
                            {slides.map((slide, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="slider__image">
                                            <img src={slide} alt=""/>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
        </>
    );
}
