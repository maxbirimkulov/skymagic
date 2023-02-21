import React from 'react';
import './Application.scss'

const Application = () => {
    return (
        <section className='application'>
            <div className="container">
                <div className="application__box">
                    <div className="application__left">
                    <h2 className='application__title'> ЗАПОЛНИТЕ
                        ЗАЯВКУ <br/>
                    </h2>
                        <span className='application__miniTitle'>Оставьте контактные данные и мы свяжемся с вами</span>

                        <div className="application__goal">
                        <select name="" id="">
                            <option value="">Для мероприятия</option>
                            <option value="">Для партнерства</option>
                        </select>
                    </div>
                    </div>
                    <form action="" className='application__form'>
                        <label htmlFor="">
                            <input type="text" placeholder={'Ф.И.О'}/>
                        </label>
                        <label htmlFor="">
                            <input placeholder={'Номер телефона'} type="tel"/>
                        </label>
                        <label htmlFor="">
                            <textarea className='application__message' placeholder={"Cообщение"}>

                            </textarea>
                        </label>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Application;