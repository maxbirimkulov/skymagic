import React, {useEffect} from 'react';
import './Baner.scss'
import "swiper/css/effect-creative";
import {useDispatch} from "react-redux";
import {getEvents} from "../../../redux/reducers/events";
import { Parallax } from 'react-parallax';
import bg from '../images/Artboard 1 (2).jpg'

const Baner = () => {
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
            <div className="banner__container container">
                <h2 className='banner__titles'>Добро пожаловать  <br/> в
                    SMagic и SKYPARK</h2>
                <p className='banner__subtitle'>Здесь начинается ваш путь <br/>  в мир радости и волшебства!</p>
            </div>
            <div className='banner__greyback'></div>
            </Parallax>
        </section>
    );
};

export default Baner;