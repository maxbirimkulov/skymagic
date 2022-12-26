import React from 'react';
import './Request.scss'
import DownloadButton from "../DownloadButton/DownloadButton";
import InputMask from "react-input-mask"
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";

const Request = () => {
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
        <section className='request'>
            <div className="request container">
                <div className="request__box">
                    <div className="request__left">
                    <h2>Заполните заявку <br/>
                        <span>Оставьте контактные данные и мы свяжемся с Вами</span></h2>

                    </div>

                    <form className='request__form' onSubmit={handleSubmit(onSubmit)}>
                        <label className='request__label'>
                            <input {...register('name', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 2,
                                    message: 'Минимум 2 символа'
                                }
                            })} className='request__input' type="text" placeholder={"Контактное имя"}/>
                            <p className='request__error'>{errors?.name && errors?.name.message}</p>

                        </label>

                        <label className='request__label'>
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
                        <label className='request__label'>
                            <textarea {...register('text', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 2,
                                    message: 'Минимум 2 символа'
                                }
                            })}  className='request__input request__txt' placeholder={"Оставьте сообщение"}/>
                            <p className='request__error'>{errors?.text && errors?.text.message}</p>
                        </label>
                        <select {...register('goal')} className="request__select">
                            <option className="request__option" value="asdads">asdads</option>
                            <option className="request__option" value="asdads12">asdads12</option>
                            <option className="request__option" value="asdads33">asdads33</option>
                            <option className="request__option" value="asdads55">asdads55</option>
                            <option className="request__option" value="asdads77">asdads77</option>
                        </select>
                        <DownloadButton text={'Отправить'}/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Request;