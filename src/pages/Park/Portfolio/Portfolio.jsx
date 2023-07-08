import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller,Autoplay } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "./Portfolio.scss"
import axios from "../../../utils/axios";
import {useParams} from "react-router-dom";


export default function Portfolio() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [meals,setMeals] =useState([])


    const params = useParams()
    console.log(params.name)
    useEffect(()=>{
        axios("/gallery")
            .then(({data})=> setMeals(data))
            .catch((err)=>err)
    },[])
    return (
        <div className="portfolio">
            <h2 className='portfolio__title'>Галлерея</h2>
            <Swiper
                grabCursor={true}
                modules={[Controller]}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper ,
                    inverse: true}}

                slidesPerView={5}
                spaceBetween={30}
                initialSlide={3}
                loop={true}
                centeredSlides={true}
                className="firstSwiper"

            >
                {meals.length ? meals.map(el => (
                    <SwiperSlide key={el._id}>
                        <img src={`${process.env.REACT_APP_URL}${el.imageUrl}`} alt={el.text}/>
                    </SwiperSlide>
                )) :"hello"}
            </Swiper>
            <Swiper
                grabCursor={true}
                slidesPerView={5}
                spaceBetween={30}
                initialSlide={3}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Controller,Autoplay]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper,
                    inverse: true}}
                className="secondSwiper"
            >
                {meals.map(el => (
                    <SwiperSlide key={el._id}>
                        <img src={`${process.env.REACT_APP_URL}${el.imageUrl}`} alt={el.text}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
