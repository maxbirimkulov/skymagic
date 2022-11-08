import React from 'react';
import './Parks.scss'
import skypark from '../images/icon-sky-park.jpg'
import tommi from '../images/tommi.jpg'
import tehnopark from '../images/tehno-park.jpg'
import stum from '../images/цум2.jpg'
import {NavLink} from "react-router-dom";

const Parks = () => {
    return (
        <section className='parks'>
            <div className="parks__container container">
                <h2 className='parks__branches '>НАШИ ФИЛИАЛЫ</h2>
                <div className="parks__cards">
                    <div className="parks__card">
                        <div className="parks__space">
                        <img src={tehnopark} alt=""/>
                        <div className="parks__text">
                        <h3>Smagic Технопарк</h3>
                        <p>SMagic Технопарк это самый большой по площади парк среди наших филиалов, парк разделен на две зоны Город Активити – игровая площадка где более 20 аттракционов и Город профессий – где имеются 56 профессий и 25 локаций.</p>
                        </div>


                        </div>
                        <button><NavLink to='/parks/Sky%20Park'/>Узнать больше</button>
                    </div>

                    <div className="parks__card">
                        <div className="parks__space">
                        <img src={stum} alt=""/>
                        <div className="parks__text">
                        <h3>SMagic Цум</h3>
                        <p>SMagic Цум 2 в это детский комплекс развлечений в морском стиле, интерьер даёт атмосферу океанариума, где детки могут почувствовать себя настоящими рыбками и поиграться на просторах «океана»</p>

                        </div>

                        </div>
                        <button>Узнать больше</button>
                    </div>
                    <div className="parks__card">
                        <div className="parks__space">
                        <img src={tommi} alt=""/>
                        <div className="parks__text">
                        <h3>SMagic Tommi mall</h3>
                        <p>SMagic Tommi mall – одна из самых уютных площадок в стране с очень удобным расположением в юго-восточной части города, здесь развлечения найдут самые маленькие представители человеческой расы!</p>

                        </div>

                        </div>
                        <button>Узнать больше</button>
                    </div>
                    <div className="parks__card">
                        <div className="parks__space">
                        <img src={skypark} alt="sky-park"/>
                        <div className="parks__text">
                        <h3>Sky Park</h3>
                        <p>Крупнейший крытый парк в Кыргызстане.SKY PARK – это 5500 кв. м. безумства и веселья, здесь есть самые большие и крутые аттракционы по всей стране, это невиданный комплекс, где дети от 1-18 лет со 100% - гарантией найдут, то о чем они так долго мечтали.</p>

                        </div>

                        </div>
                        <button>Узнать больше</button>
                    </div>

                    </div>
                </div>
        </section>
    );
};

export default Parks;