import React, {useState,} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import './form.scss'
import InputMask from 'react-input-mask';
import {useForm} from "react-hook-form";
import axios from "../../utils/axios";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/reducers/user";

const Form = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const {
        register,
        handleSubmit,
        reset,
        formState : {
            errors
        }
    } = useForm({mode: "onBlur"})


    const createUser = (obj) => {
        axios.post('auth/register', obj).then( async ({data}) => {
            await dispatch(registerUser({obj: data}))
            await localStorage.setItem('user', JSON.stringify(data))
            await reset();
            await navigate('/')
        }).catch((error) => console.log(`bad request ${error}`));
    };

    const addUser = (data) => {
        axios.post('/auth/login', data).then( async (res) => {
            await dispatch(registerUser({obj: res.data}));
            await localStorage.setItem('user', JSON.stringify(res.data));
            await reset();
            await navigate('/')
        }).catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {
        if (location.pathname === '/register') {
            createUser(data)
        } else {
            addUser(data)
        }
    }

    const [show, setShow] = useState(false)

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="register__form">
            {
                location.pathname === '/register' &&
                <label className='register__form-label'>
                    <input {...register('name', {
                        required: {
                            message: 'Имя обязательно к заполнению',
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                        }
                    })} className={`register__form-input ${errors.name ? 'register__form-input_error' : ''}`} placeholder='Имя' type="text"/>

                    <p className='register__form-error'>
                        {errors.name && errors.name?.message}
                    </p>

                </label>
            }
            {
                location.pathname === '/register' &&
                <label className='register__form-label'>
                    <input {...register('surname', {
                        required: {
                            message: 'Фамилия обязательно к заполнению',
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                        }
                    })} className={`register__form-input ${errors.surname ? 'register__form-input_error' : ''}`} placeholder='Фамилия' type="text"/>
                    <p className='register__form-error'>
                        {errors.surname && errors.surname?.message}
                    </p>
                </label>

            }
            {
                location.pathname === '/register' &&
                <label className='register__form-label'>
                    <input {...register('login', {
                        required: {
                            message: 'Логин обязательно к заполнению',
                            value: true
                        },
                        minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                        }
                    })} className={`register__form-input ${errors.login ? 'register__form-input_error' : ''}`} placeholder='Логин' type="text"/>
                    <p className='register__form-error'>

                        {errors.login && errors.login?.message}
                    </p>
                </label>

            }
            <label className='register__form-label'>
                <input {...register('email',{
                    required: {
                        message: 'Имя обязательно к заполнению',
                        value: true
                    },
                    minLength: {
                        message: 'Минимум 10 символа',
                        value: 10
                    },
                    pattern: {
                        message: 'Напишите правильно свой email',
                        value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                    }

                })} className={`register__form-input ${errors.email ? 'register__form-input_error' : ''}`} placeholder='Адрес электронной почты' type="email"/>
                <p className='register__form-error'>
                    {errors.email && errors.email?.message}
                </p>
            </label>
            {
                location.pathname === '/register' &&
                <label className='register__form-label'>
                    <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'  {...register('phone', {
                        required: {
                            value: true,
                            message: 'Это поле обязательное'
                        },
                        pattern: {
                            value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                            message: 'Заполните номер телефона'
                        }
                    })} className={`register__form-input ${errors.phone ? 'register__form-input_error' : ''}`} placeholder='Номер телефона'/>
                    <p className='register__form-error'>
                        {errors.phone && errors.phone?.message}
                    </p>
                </label>
            }

            {
                location.pathname === '/register' &&
                <label className='register__form-label'>
                    <input {...register('age', {
                        required: {
                            message: 'Возраст обязателен к заполнению',
                            value: true
                        },
                        min:{
                            message: 'Укажите возраст корректно',
                            value: 1,
                        },
                        max:{
                            message: 'Укажите возраст корректно',
                            value: 90,
                        }
                    })} className={`register__form-input ${errors.age ? 'register__form-input_error' : ''}`} placeholder='Возраст' type="number"/>
                    <p className='register__form-error'>
                        {errors.age && errors.age?.message}
                    </p>
                </label>

            }

            {
                location.pathname === '/register' &&
                <div className='register__form-gender'>
                    <p className='register__form-gender-title'>Пол</p>
                    <div className='register__form-gender-row '>
                        <label className='register__form-gender-label' >
                            <input value='men' {...register('gender')} className='register__form-gender-input' type="radio"/>
                            <span className='register__form-gender-value'>Мужской</span>
                        </label>
                        <label className='register__form-gender-label' >
                            <input value='women' {...register('gender')} className='register__form-gender-input' type="radio"/>
                            <span className='register__form-gender-value'>Женский</span>
                        </label>
                    </div>
                </div>
            }
            {/*{*/}
            {/*    location.pathname === '/register' &&*/}
            {/*    <div className='register__form-gender'>*/}
            {/*        <p className='register__form-gender-title'>Семейное

Максат Биримкулов, [25.12.2022 16:56]
положение</p>*/}
            {/*        <div className='register__form-gender-row '>*/}
            {/*            <label className='register__form-gender-label' >*/}
            {/*                <input value={true} {...register('married')} className='register__form-gender-input' type="radio"/>*/}
            {/*                <span className='register__form-gender-value'>В браке</span>*/}
            {/*            </label>*/}
            {/*            <label className='register__form-gender-label' >*/}
            {/*                <input value={false} {...register('married')} className='register__form-gender-input' type="radio"/>*/}
            {/*                <span className='register__form-gender-value'>Холост</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*}*/}

            <label className='register__form-label'>
                <input {...register('password', {
                    required: {
                        message: "Пароль обязателен к заполнению",
                        value: true
                    },
                    pattern: {
                        value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                        message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                    }
                })} className={`register__form-input ${errors.password ? 'register__form-input_error' : ''}`} placeholder='Пароль' type={show ? 'text': 'password'}/>
                <p className='register__form-error'>
                    {errors.password && errors.password?.message}
                </p>
            </label>
            {
                location.pathname === '/register' &&
                <label className='register__form-label register__form-label_checkbox'>
                    <input checked={show} onChange={(e) => setShow(e.target.checked)}  className='register__form-input register__form-input_checkbox' type="checkbox"/>
                    <span className='register__form-show'>Показать пароль</span>
                </label>
            }

            <button className='register__form-btn' type='submit'>
                {
                    location.pathname === '/register' ? 'Зарегистрироваться' : 'Войти'
                }
            </button>

            {
                location.pathname === '/register' ?
                    <p className='register__form-text'>У вас уже есть аккаунт ? <Link to='/login'>Войти</Link></p>
                    : <p className='register__form-text'>Нет учетной записи ? <Link to='/register'>Зарегистрироваться</Link></p>
            }





        </form>
    );
};

export default Form;