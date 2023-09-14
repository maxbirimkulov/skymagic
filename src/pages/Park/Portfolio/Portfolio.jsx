import React, {useEffect, useState} from "react";
import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import fancy from "../fancy";
import "./Portfolio.scss"
import axios from "../../../utils/axios";
import {useParams} from "react-router-dom";


SwiperCore.use([Controller]);



export default function Portfolio() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [meals,setMeals] =useState([])



    const params = useParams()

    useEffect(()=>{

        axios("/gallery")
            .then(({data})=> setMeals(data))
            .catch((err)=>err)
    },[])
    return (
        <div className="portfolio">
            <h2 className='portfolio__title'>Галлерея</h2>

            <Swiper
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper, inverse: true}}
                slidesPerView={5}
                spaceBetween={30}
                initialSlide={2}
                loop={true}
                centeredSlides={true}
                breakpoints={{
                    0:{
                        centeredSlides:true,
                        spaceBetween:0,
                        slidesPerView:1,

                    },
                    668:{
                        slidesPerView:5,
                        spaceBetween:30,
                        initialSlide:2,
                        centeredSlides:true
                    }
                }}

            >
                {meals.map((el) => (
                        params.name.toLowerCase().split(' ').includes(el.branch)? <SwiperSlide key={el._id}>
                            <fancy
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >

                                <a data-fancybox="gallery" href={`${process.env.REACT_APP_URL}${el.imageUrl}`}>


                            <picture>
                                    <source srcSet={`${process.env.REACT_APP_URL}${el.imageUrl}`} type="image/webp"/>
                                    <source srcSet={`${process.env.REACT_APP_URL}${el.imageUrl}`} type="image/jpeg"/>
                                <img src={`${process.env.REACT_APP_URL}${el.imageUrl}`} alt={el.text} />
                                </picture>
                                </a>
                            </fancy>
                        </SwiperSlide>:''

                ))}

            </Swiper>

            <Swiper
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper, inverse: true }}
                slidesPerView={5}
                spaceBetween={30}
                initialSlide={2}
                loop={true}
                centeredSlides={true}
                breakpoints={{
                    0:{
                        centeredSlides:true,
                        spaceBetween:0,
                        slidesPerView:1,

                    },
                    668:{
                        slidesPerView:5,
                        spaceBetween:30,
                        initialSlide:2,
                        centeredSlides:true
                    }
                }}

            >
                {meals.map((el) => (
                    params.name.toLowerCase().split(' ').includes(el.branch)? <SwiperSlide key={el._id}>
                        <picture>
                            <source srcSet={`${process.env.REACT_APP_URL}${el.imageUrl}`} type="image/webp"/>
                            <source srcSet={`${process.env.REACT_APP_URL}${el.imageUrl}`} type="image/jpeg"/>
                            <img src={`${process.env.REACT_APP_URL}${el.imageUrl}`} alt={el.text} />
                        </picture>

                    </SwiperSlide>:''
                ))}
            </Swiper>
        </div>
    );
}
