import React, {useEffect} from 'react';
import './Baner.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative} from "swiper";
import "swiper/css/effect-creative";
import {Autoplay} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../../../redux/reducers/events";
import {Link} from "react-router-dom";
import { Parallax } from 'react-parallax';
import bg from '../images/Artboard 1 (2).jpg'

const Baner = () => {
    const {data} = useSelector(s =>s.events)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEvents())

    }, [])
    return (
        <section className='banner'>

            <Parallax bgImage={bg}
            strength={300}
                      blur={0}

            >





        {/*<section className='banner'>*/}


            <div className="banner__container container">
                <h2 className='banner__titles'>Добро пожаловать  <br/> в
                    SMagic и SKYPARK</h2>
                <p className='banner__subtitle'>Здесь начинается ваш путь <br/>  в мир радости и волшебства!</p>
                {/*<div className="banner__slider">*/}
                {/*    <Swiper*/}
                {/*        grabCursor={true}*/}
                {/*        effect={"creative"}*/}
                {/*        creativeEffect={{*/}
                {/*            prev: {*/}
                {/*                shadow: true,*/}
                {/*                translate: [0, 0, -400],*/}
                {/*            },*/}
                {/*            next: {*/}
                {/*                translate: ["100%", 0, 0],*/}
                {/*            },*/}
                {/*        }} autoplay={{*/}
                {/*        delay: 5000,*/}
                {/*        // disableOnInteraction: false,*/}
                {/*        loop:true*/}
                {/*    }}*/}

                {/*        modules={[Autoplay, EffectCreative]}*/}
                {/*        className="banner__swiper"*/}
                {/*    >*/}
                {/*        {data.map((el)=>(*/}
                {/*            <SwiperSlide key={el} className={"banner__title"}>*/}
                {/*                <h2 className='banner__maintitle'>*/}
                {/*                    {el.title}*/}
                {/*                </h2>*/}
                {/*                <h2 className="banner__smagic">*/}
                {/*                    {el.title2}*/}
                {/*                </h2>*/}

                {/*                <h4 className='banner__text'>*/}
                {/*                    {el.description}*/}
                {/*                </h4>*/}
                {/*                    <div className='banner__btns'>*/}
                {/*                        <Link  to='/allstock'><button className='banner__btn'>Подробнее</button></Link>*/}
                {/*                    </div>*/}
                {/*            </SwiperSlide>*/}
                {/*        ))}*/}
                {/*    </Swiper>*/}
                {/*</div>*/}
                {/*<div className="banner__second-slider">*/}
                {/*    <Swiper*/}
                {/*        autoplay={{*/}
                {/*            delay: 2500,*/}
                {/*            disableOnInteraction: false,*/}
                {/*        }}*/}
                {/*        slidesPerView={"auto"}*/}
                {/*        centeredSlides={true}*/}
                {/*        spaceBetween={30}*/}

                {/*        modules={[Autoplay]}*/}
                {/*        className="banner__second-swiper"*/}
                {/*    >*/}
                {/*        <div className="swiper-slide-wrapper">*/}
                {/*            {data.map((el)=>(*/}
                {/*                <SwiperSlide key={el} className={"banner__title"}>*/}
                {/*                    <h2 className='banner__smagic'>*/}
                {/*                        {el.title}*/}
                {/*                    </h2>*/}
                {/*                    <h2 className="banner__smagic">*/}
                {/*                        {el.title2}*/}
                {/*                    </h2>*/}

                {/*                    <h4 className='banner__text'>*/}
                {/*                        {el.description}*/}
                {/*                    </h4>*/}

                {/*                    <Link  to='/ticket'><button className='banner__btn'>Подробнее</button></Link>*/}
                {/*                </SwiperSlide>*/}
                {/*            ))}*/}

                {/*        </div>*/}

                {/*    </Swiper>*/}
                {/*</div>*/}

            </div>
            {/*<div className='banner__greyback'></div>*/}

        {/*</section>*/}
            </Parallax>




        </section>
    );
};

export default Baner;