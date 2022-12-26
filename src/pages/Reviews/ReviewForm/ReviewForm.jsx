import React from 'react';
import DownloadButton from "../../../Components/DownloadButton/DownloadButton";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";
import {useSelector} from "react-redux";

const ReviewForm = () => {
    const {user} = useSelector((store)=> store.user)
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
                console.log('отзывы отправлена')
                reset()
            }).catch(() => console.log('ошибка при отправке'))
    }
    return (
        <form className='review__form' onSubmit={handleSubmit(onSubmit)}>
            <label className='review__label'>
                <input {...register('name', {
                    required: 'Вы должны зарегистроваться чтобы оставить отзыв',
                    minLength: {
                        value: 2,
                        message: 'Минимум 2 символа'
                    }
                })} className='review__input' type="hidden" value={user.email ? user.name : null}/>
                <p className='review__error'>{errors?.name && errors?.name.message}</p>
            </label>

            <label className='review__label'>
                            <textarea {...register('text', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 2,
                                    message: 'Минимум 2 символа'
                                }
                            })}  className='review__input review__txt' placeholder={"Оставьте сообщение"}/>
                <p className='review__error'>{errors?.text && errors?.text.message}</p>
            </label>

            <DownloadButton text={'Отправить'}/>
        </form>

    );
};

export default ReviewForm;