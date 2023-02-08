import React from 'react';
import './ReviewForm.scss'

const ReviewForm = () => {
    return (
        <section className='reviews'>
            <div className="reviews container">
                <form className='reviews__form'>
                    <div className="reviews__left">
                        <h2>ОСТАВЬТЕ <br/>
                            НАМ ОТЗЫВ</h2>
                        <select name="" id="">
                            <option value="">Skypark
                                ТЦ “Ала-Арча”</option>
                            <option value="">SMagic
                                ТЦ “Технопарк”
                            </option>
                            <option value="">SMagic
                                ТЦ “Tommi Mall”</option>
                            <option value="">SMagic
                                ТЦ “Tommi Mall”</option>
                        </select>
                    </div>
                    <div className="reviews__right">
                        <input className='reviews__fio' type="text" placeholder='ФИО'/>
                        <textarea className='reviews__text' name="" id=""  rows="10" placeholder='Сообщение'></textarea>
                        <button className='reviews__btn'>Отправить</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ReviewForm;