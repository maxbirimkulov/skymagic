import React from 'react';
import './Vacancies.scss'

import {vacancies} from "./data";


const Vacancies = () => {
    return (

        <div className='vacancies'>
            <div className="container">
                <h2 className='vacancies__videotittle'>Видеоматериал</h2>
             <div className='video'>
                 <div className="video__card">
                     <img src="https://antitreningi.ru/info/wp-content/uploads/2021/03/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%D1%83%D1%80%D0%BE%D0%BA-1200x720.jpg" alt=""/>
                     <h3>Название</h3>
                     <p>Описание</p>
                 </div>
                 <div className="video__card">
                     <img src="https://antitreningi.ru/info/wp-content/uploads/2021/03/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%D1%83%D1%80%D0%BE%D0%BA-1200x720.jpg" alt=""/>
                     <h3>Название</h3>
                     <p>Описание</p>
                 </div>
                 <div className="video__card">
                     <img src="https://antitreningi.ru/info/wp-content/uploads/2021/03/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%D1%83%D1%80%D0%BE%D0%BA-1200x720.jpg" alt=""/>
                     <h3>Название</h3>
                     <p>Описание</p>
                 </div>
             </div>
                <h2 className='vacancies__title'>Вакансии</h2>
            <div className="vacancies__container container">

                {
                    vacancies && vacancies.map(el => (
                        <div key={el.id} className="vacancies__content">
                            <div className="vacancies__img">
                                <img src={el.img} alt={`user${el.id}`}/>
                            </div>
                            <div className="vacancies__information">
                                <h5 className="vacancies__category">{el.category}</h5>
                                <div  className="vacancies__services">
                                    <h3 className="vacancies__services-text">{el.services}</h3>
                                </div>
                                <p className="vacancies__price">{el.price}</p>
                                <p className="vacancies__name">{el.name}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>

    );
};

export default Vacancies;