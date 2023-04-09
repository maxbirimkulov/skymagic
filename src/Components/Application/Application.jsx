import React from 'react';
import './Application.scss'
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import InputMask from "react-input-mask";
import DownloadButton from "../DownloadButton/DownloadButton";
import {useLocation} from "react-router-dom";
import {clickFunc} from "../../utils/clickFunc";

const Application = () => {
    const location = useLocation()
    const {
        register,
        formState: {
            errors,
        },
        reset,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        axios.post('request', data)
            .then(() => {
                console.log('заявка отправлена')
                reset()
            }).catch(() => console.log('ошибка при отправке'))
    }
    return (
        <section className='application'>
            <div className="container">
                <form className="application__box" onSubmit={handleSubmit(onSubmit)}>
                    <div className="application__left">
                    <h2 className='application__title'> ЗАПОЛНИТЕ
                        ЗАЯВКУ <br/>
                    </h2>
                        <span className='application__miniTitle'>Оставьте контактные данные и мы свяжемся с вами <br/> {
                            location.pathname === '/services' ? <>
                                <a href='tel:+996771780708'>+996 (771) 780 708</a></>: ""
                        }</span>

                        <div className="application__goal">
                            {
                                location.pathname === '/services' ?
                                    <select {...register('goal')}>
                                        <option value="Для мероприятия">Для мероприятия</option>
                                        <option value="Для партнерства">Для партнерства</option>
                                    </select> :
                                    <select {...register('goal')}>
                                        <option value="Для партнерства">Для партнерства</option>
                                        <option value="Для мероприятия">Для мероприятия</option>

                                    </select>

                            }

                    </div>
                    </div>
                    <div className='application__form'>
                        <label htmlFor="">
                            <input {...register('name', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 2,
                                    message: 'Минимум 2 символа'
                                }
                            })}  type="text" placeholder={'Ф.И.О'}/>
                            <p className='request__error'>{errors?.name && errors?.name.message}</p>
                        </label>
                        <label htmlFor="">
                            <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'  {...register('phone', {
                                required: {
                                    value: true,
                                    message: 'Это поле обязательное'
                                },
                                pattern: {
                                    value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                    message: 'Заполните номер телефона'
                                }
                            })} className={`request__input request__numb ${errors.phone ? 'request__input_error' : ''}`} placeholder='Номер телефона'/>
                            <p className='request__error'>
                                {errors.phone && errors.phone?.message}
                            </p>
                        </label>
                        <label htmlFor="">
                            <textarea {...register('text', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 2,
                                    message: 'Минимум 2 символа'
                                }
                            })} className='application__message' placeholder={"Cообщение"}>

                            </textarea>
                            <p className='request__error'>{errors?.text && errors?.text.message}</p>
                        </label>
                        <DownloadButton text={'Отправить'}/>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Application;