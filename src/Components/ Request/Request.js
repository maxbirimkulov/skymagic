import React from 'react';
import './Request.scss'
import DownloadButton from "../DownloadButton/DownloadButton";

const Request = () => {
    return (
        <section className='request'>
            <div className="request container">
                <div className="request__box">
                    <div className="request__left">
                    <h2>Заполните заявку <br/>
                        <span>Оставьте контактные данные и мы свяжемся с Вами</span></h2>

                    </div>

                        <form action="" className='request__form'>
                            <label className='request__label'>
                                <input className='request__input' type="text" placeholder='Контакное имя'/>
                            </label>
                            <label>
                                <input type="tel" placeholder='Мобильный телефон'/>
                            </label>
                            <label>
                                <input type='text' placeholder='Сообщение'/>
                            </label>
                           <DownloadButton text={'Отправить'}/>
                        </form>

                </div>
            </div>
        </section>
    );
};

export default Request;