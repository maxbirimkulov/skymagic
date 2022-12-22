import React from 'react';
import './Video.scss'

const Video = () => {
    return (
        <section className='video'>
            <div className="video container">

                <div className='video'>
                    <div className="video__card">
                        <img src="https://antitreningi.ru/info/wp-content/uploads/2021/03/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%D1%83%D1%80%D0%BE%D0%BA-1200x720.jpg" alt=""/>

                        <p>Описание</p>
                    </div>
                    <div className="video__card">
                        <img src="https://antitreningi.ru/info/wp-content/uploads/2021/03/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%D1%83%D1%80%D0%BE%D0%BA-1200x720.jpg" alt=""/>

                        <p>Описание</p>
                    </div>
                    <div className="video__card">
                        <img src="https://antitreningi.ru/info/wp-content/uploads/2021/03/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%D1%83%D1%80%D0%BE%D0%BA-1200x720.jpg" alt=""/>

                        <p>Описание</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;