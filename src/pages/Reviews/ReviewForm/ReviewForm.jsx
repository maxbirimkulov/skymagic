import React, {useState} from 'react';
import './ReviewForm.scss'
import {useForm} from "react-hook-form";
import Rating from '@mui/material/Rating';
import axios from "../../../utils/axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ReviewForm = () => {
    const [value, setValue] = useState(5);
    const {
        register,
        formState: {
            errors,
        },
        reset,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {

        axios.post('review', data)
            .then(() => {
                toast.success("Отзыв успешно отправлен!");
                console.log(data)
                reset()
            }).catch(() => toast.error("Произошла ошибка!"))
    }

    return (
        <section className='reviews'>
            <div className="reviews container">
                <form className='reviews__form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="reviews__left">
                        <h2>ОСТАВЬТЕ <br/>
                            НАМ ОТЗЫВ</h2>
                        <p>Можете оставить нам отзыв о наших <br/>
                        развлекательных парках. <br/>
                            мы рассмотрим их в кротчайщее время
                        </p>
                        <div className="reviews__radios">
                            <label className="reviews__radio">

                                <input
                                    {...register('branch', { required: true })}
                                    type="radio"
                                    name="branch"
                                    value="sky"
                                    className="reviews__radio-input"
                                    id="sky"
                                />
                                <div className="reviews__radio-btn"></div>
                                Skypark <br/>
                                ТЦ "Ала-арча"
                            </label>
                            <label className="reviews__radio">

                                <input
                                    {...register('branch', { required: true })}
                                    type="radio"
                                    name="branch"
                                    value="techno"
                                    className="reviews__radio-input"
                                    id="techno"
                                />
                                <div className="reviews__radio-btn"></div>
                                SMagic <br/>
                                ТЦ "Технопарк"
                            </label>
                            <label className="reviews__radio">

                                <input
                                    {...register('branch', { required: true })}
                                    type="radio"
                                    name="branch"
                                    value="tommy"
                                    className="reviews__radio-input"
                                    id="tommy"
                                />
                                <div className="reviews__radio-btn"></div>
                                SMagic <br/>
                                ТЦ "Tommi Mall"
                            </label>
                            <label className="reviews__radio">

                                <input
                                    {...register('branch', { required: {message: "Выберите филиал", value: true} })}
                                    type="radio"
                                    name="branch"
                                    value="tsum"
                                    className="reviews__radio-input"
                                    id="tsum"
                                />
                                <div className="reviews__radio-btn"></div>
                                SMagic <br/>
                                ТЦ "ЦУМ 2"

                            </label>
                        </div>
                        <p className='request__error'>{errors?.branch && errors?.branch.message}</p>
                        {/*<label className="ticket__form-label">*/}
                        {/*    <select*/}
                        {/*        className={`ticket__form-select ${errors.name ? 'ticket__form-select_error' : ''}`} {...register("branch", {*/}
                        {/*        required: {*/}
                        {/*            message: 'Филиал обязателен к заполнению',*/}
                        {/*            value: true*/}
                        {/*        }*/}
                        {/*    })}>*/}
                        {/*        <option hidden={true} value="">Выберите парк</option>*/}
                        {/*        <option value="sky">S</option>*/}
                        {/*        <option value="techno">SMAGIC ТЕНХОПАРК</option>*/}
                        {/*        <option value="tsum">SMAGIC ЦУМ</option>*/}
                        {/*        <option value="tommy">SMAGIC ТОММИ МОЛ</option>*/}
                        {/*    </select>*/}
                        {/*    <p className='request__error'>{errors?.branch && errors?.branch.message}</p>*/}
                        {/*</label>*/}

                    </div>
                    <div className="reviews__right">
                        <input {...register('name', {
                            required: {
                                message: 'Поле обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                value: 2,
                                message: 'Минимум 2 символа'
                            }
                        })} className='reviews__fio request__input' type="text" placeholder={"Ф.И.О"}/>
                        <p className='request__error'>{errors?.name && errors?.name.message}</p>

                        <textarea {...register('text', {
                            required: {
                                message : 'Поле обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                value: 2,
                                message: 'Минимум 2 символа'
                            }
                        })}  className='request__input reviews__text' placeholder={"Оставьте сообщение"}/>
                        <p className='request__error'>{errors?.text && errors?.text.message}</p>

                        <div className="reviews__row">

                            <label  className='reviews__stars'>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    size="large"
                                />
                                <input {...register('rating', {
                                    required: {
                                        message : 'Поле обязательно к заполнению',
                                        value : true
                                    }
                                })} hidden={true} className='reviews__fio request__input' type="number" value={value}/>

                            </label>
                            <button className='reviews__btn' type={"submit"}>Отправить</button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </section>
    );
};

export default ReviewForm;