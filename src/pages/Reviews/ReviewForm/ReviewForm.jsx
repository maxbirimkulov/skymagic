import React, {useState} from 'react';
import './ReviewForm.scss'
import {useForm} from "react-hook-form";
<<<<<<< HEAD
import axios from "../../../utils/axios";

const ReviewForm = () => {


=======
import Rating from '@mui/material/Rating';
import axios from "../../../utils/axios";

const ReviewForm = () => {
    const [value, setValue] = useState(0);
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
                console.log('отзыв отправлен')
                reset()
            }).catch(() => console.log('ошибка при отправке'))
    }
>>>>>>> 4d716ccc22af72c12dc0a95a92e45fb4215024a8
    return (
        <section className='reviews'>
            <div className="reviews container">
                <form className='reviews__form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="reviews__left">
                        <h2>ОСТАВЬТЕ <br/>
                            НАМ ОТЗЫВ</h2>
                        <label className="ticket__form-label">
                            <select
                                className={`ticket__form-select ${errors.name ? 'ticket__form-select_error' : ''}`} {...register("branch", {
                                required: {
                                    message: 'Филиал обязателен к заполнению',
                                    value: true
                                }
                            })}>
                                <option hidden={true} value="">Выберите парк</option>
                                <option value="sky">SKY-PARK АЛА АРЧА</option>
                                <option value="techno">SMAGIC ТЕНХОПАРК</option>
                                <option value="tsum">SMAGIC ЦУМ</option>
                                <option value="tommy">SMAGIC ТОММИ МОЛ</option>
                            </select>
                            <p className='request__error'>{errors?.branch && errors?.branch.message}</p>
                        </label>

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
        </section>
    );
};

export default ReviewForm;