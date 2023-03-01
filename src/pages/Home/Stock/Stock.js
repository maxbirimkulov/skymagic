import React,{useEffect} from 'react';
import './Stock.scss'
import dr from '../images/Технопарк_2.jpg'
import {useDispatch, useSelector} from "react-redux";
import {getSales} from "../../../redux/reducers/sales";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCreative} from "swiper";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";
const Stock = () => {
    const {data} = useSelector((s) => s.sales)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSales())

    }, [])
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    return (
        <section className='stock'>
          <div className="stock">
                <h2 className='stock__title'>АКЦИИ И СОБЫТИЯ</h2>
                <div className="stock__slider">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}

                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="stock__swiper"
                    >
                        {data.map(el =>(
                            <SwiperSlide key={el._id}>
                                <div className="stock__card-wrapper">
                                    <div className="stock__card">
                                        <img src={`${process.env.REACT_APP_URL}${el.images}`} alt=""/>
                                        <h4 className='stock__name'>
                                            {el.title}
                                        </h4>
                                        <p className='stock__info'>
                                            {el.description}
                                        </p>
                                        <Link to={`/allstock`}>
                                            <button onClick={toTop} className='stock__btn'>ПОДРОБНЕЕ</button>
                                        </Link>

                                    </div>
                                </div>

                            </SwiperSlide>

                        ))}
                    </Swiper>

                </div>

          </div>
        </section>
    );
};

export default Stock;