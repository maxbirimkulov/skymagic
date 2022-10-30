import React from 'react';
import './Parks.scss'

const Parks = () => {
    return (
        <section className='parks'>
            <div className="parks__container container">
                <h2 className='parks__branches '>НАШИ ФИЛИАЛЫ</h2>
                <div className="parks__cards">
                    <div className="parks__card">
                        <img src="https://media.disneylandparis.com/d4th/en-gb/images/n027585-n029130-n030673_2023apr17_world_disney-experience-page-parade-views_16-9_tcm752-232868.jpg?w=360" alt=""/>
                        <div className="parks__text">
                        <h3>SMagic Технопарк</h3>
                        <p>SMagic Технопарк это самый большой по площади парк среди наших филиалов, парк разделен на две зоны Город Активити – игровая площадка где более 20 аттракционов и Город профессий – где имеются 56 профессий и 25 локаций.</p>
                        <button>Узнать больше</button>

                        </div>
                    </div>
                    <div className="parks__card">
                        <img src="https://media.disneylandparis.com/d4th/en-gb/images/n027585-n029130-n030673_2023apr17_world_disney-experience-page-parade-views_16-9_tcm752-232868.jpg?w=360" alt=""/>
                        <div className="parks__text">
                        <h3>SMagic Цум</h3>
                        <p>SMagic Цум 2 в это детский комплекс развлечений в морском стиле, интерьер даёт атмосферу океанариума, где детки могут почувствовать себя настоящими рыбками и поиграться на просторах «океана»</p>
                        <button>Узнать больше</button>
                        </div>
                    </div>
                    <div className="parks__card">
                        <img src="https://media.disneylandparis.com/d4th/en-gb/images/n027585-n029130-n030673_2023apr17_world_disney-experience-page-parade-views_16-9_tcm752-232868.jpg?w=360" alt=""/>
                        <div className="parks__text">
                        <h3>SMagic Tommi mall</h3>
                        <p>SMagic Tommi mall – одна из самых уютных площадок в стране с очень удобным расположением в юго-восточной части города, здесь развлечения найдут самые маленькие представители человеческой расы!</p>
                        <button>Узнать больше</button>
                        </div>
                    </div>
                    <div className="parks__card">
                        <img src="https://media.disneylandparis.com/d4th/en-gb/images/n027585-n029130-n030673_2023apr17_world_disney-experience-page-parade-views_16-9_tcm752-232868.jpg?w=360" alt=""/>
                        <div className="parks__text">
                        <h3>ЦУМ</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid debitis est ex exercitationem ipsam laudantium necessitatibus quos vero voluptate!</p>
                        <button>Узнать больше</button>
                        </div>
                    </div>
                    <div className="parks__card">
                        <img src="https://media.disneylandparis.com/d4th/en-gb/images/n027585-n029130-n030673_2023apr17_world_disney-experience-page-parade-views_16-9_tcm752-232868.jpg?w=360" alt=""/>
                        <div className="parks__text">
                        <h3>ЦУМ</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid debitis est ex exercitationem ipsam laudantium necessitatibus quos vero voluptate!</p>
                        <button>Узнать больше</button>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Parks;