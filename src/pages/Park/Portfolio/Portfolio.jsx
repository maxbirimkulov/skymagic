import React, {useEffect, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller,Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Portfolio.scss"
import axios from "axios";


export default function Portfolio() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [meals,setMeals] =useState([])
    useEffect(()=>{
        axios("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(({data})=> setMeals(data.meals))
            .catch((err)=>err)
    },[])
    return (
        <div className="portfolio">
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
                    <SwiperSlide key={el.idMeal}>
                        <img src={el.strMealThumb} alt={el.strMeal}/>
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
                    <SwiperSlide key={el.idMeal}>
                        <img src={el.strMealThumb} alt={el.strMeal}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
