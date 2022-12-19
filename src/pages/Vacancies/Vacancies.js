import React from 'react';
import './Vacancies.scss'

import {vacancies} from "./data";
import Video from "./Video";


const Vacancies = () => {
    return (

        <div className='vacancies'>
            <div className="container">
<Video/>
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