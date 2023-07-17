import React,{useState} from 'react';
import './mapIcons.scss'
import petroleum from './assets/Автошкола.png'
import zapravka from './assets/Автошкола_1.png'
import arheologia from './assets/Археология.png'
import kut from './assets/Архитектура.png'
import bank from './assets/Банк.png'
import beelain from './assets/Билайн.png'
import veterinar from './assets/Ветеринар.png'
import voennay from './assets/Вонная.png'
import globus from './assets/Глобус.png'
import dom from './assets/Дом моды.png'
import shahta from './assets/Золотая шахта.png'
import clinic from './assets/Клиника.png'
import comsos from './assets/Космос.png'
import ice from './assets/Морожка.png'
import pekarnya from './assets/Пекарня.png'
import pojar from './assets/Пожар.png'
import pojarnay from './assets/Пожарная.png'
import police from './assets/Полиция.png'
import port from './assets/Порт.png'
import pochta from './assets/Почта.png'
import salon from './assets/Салон красоты.png'
import sto from './assets/СТО.png'
import stroika from './assets/Стройка.png'
import scena from './assets/Сцена.png'
import teatr from './assets/Театр.png'
import fabrica from './assets/Фабрика.png'
import ferma from './assets/Ферма.png'
import eko from './assets/Экостанция.png'
import doroga from './assets/Дорога.png'
import mapImage from './assets/map_of_place.jpg'
import { motion } from 'framer-motion';







const MapIcons = () => {
    return (
        <section className='mapIcons'>
            <h2 className='mapIcons__title'>Город профессий</h2>
            <div className="mapIcons__container container">

                <img className='mapIcons__road' src={doroga} alt=""/>
                <div className='mapIcons__row'>
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={shahta}
                        alt=""
                    />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={pekarnya}
                        alt=""
                    />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={ferma}
                        alt=""
                    />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={police}
                        alt=""
                    />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={pochta}
                        alt=""
                    />
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={clinic}
                        alt=""
                    />
                </div>
                <div className='mapIcons__row2'>
                    <motion.img whileHover={{scale:1.2}} src={beelain} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={arheologia} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={fabrica} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={salon} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={dom} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={scena} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={teatr} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={pojarnay} alt=""/>
                </div>
                <div className='mapIcons__row3'>
                    <div className="mapIcons__left">
                    <motion.img whileHover={{scale:1.2}} src={voennay} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={stroika} alt=""/>
                    <motion.img whileHover={{scale:1.2}} src={kut} alt=""/>
                    </div>
                    <div className="mapIcons__right">
                        <motion.img whileHover={{scale:1.2}} src={ice} alt=""/>
                        <motion.img whileHover={{scale:1.2}} src={veterinar} alt=""/>
                    </div>
                </div>
                <div className='mapIcons__row4'>
                    <div className="mapIcons__left2">
                        <motion.img whileHover={{scale:1.2}} src={bank} alt=""/>
                        <motion.img whileHover={{scale:1.2}} src={globus} alt=""/>
                        <motion.img whileHover={{scale:1.2}} src={eko} alt=""/>
                    </div>
                  <div className="mapIcons__right2">
                      <motion.img whileHover={{scale:1.2}} src={sto} alt=""/>
                      <motion.img whileHover={{scale:1.2}} src={petroleum} alt=""/>
                  </div>
                </div>
                <img className='mapIcons__image' src={mapImage} alt=""/>

            </div>

        </section>
    );
};

export default MapIcons;