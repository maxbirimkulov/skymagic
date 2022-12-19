import React from 'react';
import './Services.scss'


const Services = () => {
    return (
        <section className='services'>
            <div className="services container">
                <h2 className='services__title'>Компания SMagic и Sky Park организовывает незабываемые шоу-программы не только в наших парках, но так-же мы можем приехать именно к ВАМ! </h2>
                <h3 className='services__variant'>Варианты мероприятий:</h3>
                <ul className='services__variants'>
              <li>Дни Рождения</li>
              <li>Утренники </li>
              <li>Тушоо- Той</li>
              <li>Детские праздники</li>
                </ul>
                <h3 className='services__receive'>С нами вы получите:</h3>
                <ul className='services__text'>
                    <li>Уникальные шоу-программы для мероприятий любого масштаба</li>
                    <li>собственный арт-отдел</li>
                    <li>профессиональная команда аниматоров</li>
                    <li>разнообразные программы для детей и взрослых</li>
                    <li>максимум удовольствия и минимум хлопот</li>
                </ul>
            </div>
        </section>
    );
};

export default Services;