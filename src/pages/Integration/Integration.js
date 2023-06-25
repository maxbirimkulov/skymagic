import React, {useState} from 'react';
import './Integration.scss'
import img1 from './Asset 1 (1).png'
import ocak from './Ожак Кебаб.png'
import img4 from './DSC_4942_DxO.jpg'
import img2 from './DSC_4953_DxO.jpg'
import img3 from './DSC_4988_DxO.jpg'
import bakai from './Бакай Банк.png'
import bublik from './Бублик.png'
import dodo from './Додо пицца.png'
import dolce from './Дольче Вита.png'
import {IoMdClose} from 'react-icons/io'
import {data3} from '../../utils/data3'
import {motion} from "framer-motion";

const Integration = () => {
    const [popup,setPopup]=useState('')

    const animation = {
        hidden:{
            x:-100,
            opacity:0,
        },
        visible: custom=>({
            x:0,
            opacity:1,
            transition:{delay:custom *0.2 }
        })
    }



    return (
        <section className='integration'>
            <div className="container">
                <h2 className='integration__title'>БРЕНД-ИНТЕГРАЦИИ ДЛЯ ПАРТНЁРА <br/>
                    В ГОРОДЕ-ПРОФЕССИЙ SMAGIC ЭТО:</h2>
                <div className="integration__box">
                    <img src={img1} alt=""/>
                    <div className='integration__left'>
                        <p>Уникальная площадка для длительной и непрерывной
                        коммуникации с аудиторией;</p>
                        <p>Идеальная локация для знакомства потребителей с
                        продуктом или услугой с использованием нативной
                        рекламы;</p>
                        <p>Среда, где в сознании аудитории формируется
                        положительный имидж бренда через участие в социально
                        значимом проекте;</p>
                    </div>
                </div>
                <h2 className='integration__city'>ЧТО ТАКОЕ «ГОРОД ПРОФЕССИЙ»?</h2>
                <p className='integration__info'>Город профессий- уникальная система в которой обычная реклама принимает новые
                    формы. Через позитивные эмоции детей бренды получают уникальную возможность
                    рассказать о своем продукте и услуге так, чтобы сделать их любимыми для детей, и для
                    родителей</p>
                <div className='integration__swiper'>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                </div>
                <h2 className='integration__partners'>НАШИ ПАРТНЕРЫ:</h2>
                <div className='integration__partner'>
                    <img onClick={(e)=>{setPopup(e.target.id)}} id='ocak' src={ocak} alt=""/>
                    <img onClick={(e)=>{setPopup(e.target.id)}} id='bakai' src={bakai} alt=""/>
                    <img onClick={(e)=>{setPopup(e.target.id)}} id='dolce' src={dolce} alt=""/>
                    <img onClick={(e)=>{setPopup(e.target.id)}} id='bublik' src={bublik} alt=""/>
                    <img onClick={(e)=>{setPopup(e.target.id)}} id='dodo' src={dodo} alt=""/>

                </div>
            </div>

            <motion.div className='integration__popup' initial='hidden' whileInView='visible'>
                {
                    data3.filter((el)=>(
                            el.name === popup
                        )
                    ).map((el,idx)=>(
                        <div className='integration__popup-show' key={el.name}>
                            <div className="popup-back">
                                <div className='integration__img'>
                                    <img src={el.img} alt={el.name}/>
                                </div>
                                <div className="integration__p">
                                    {el.text}
                                </div>
                            </div>
                            <h2 className='integration__close' onClick={()=>setPopup('')}><IoMdClose/></h2>
                        </div>

                    ))
                }
            </motion.div>

        </section>
    );
};

export default Integration;