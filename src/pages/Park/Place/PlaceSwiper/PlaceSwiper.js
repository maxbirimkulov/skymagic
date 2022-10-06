import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs, Mousewheel, Autoplay} from "swiper";
import "./PlaceSwiper.scss";
import "swiper/css";
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import {useState} from "react";

const slides = [
   img1,img2,img3,img4
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
                                mousewheel={true}
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

                        <div className="slider__next">^</div>
                    </div>

                    <div className="slider__images">
                        <Swiper
                            thumbs={{swiper: imagesNavSlider}}

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
                            modules={[Navigation, Thumbs,  Autoplay]}
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
