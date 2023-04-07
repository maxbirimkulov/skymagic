import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import "./Ticket.scss"
import logo from './logo.png'
const Ticket = () => {
    const [threeTicket, setThreeTicket] = useState(0)
    const [sixteenTicket, setSixteenTicket] = useState(0)
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})

    return (
        <div className="ticket">
            <form className="ticket__form">
                <div className="ticket__form-row">
                    <div className="ticket__form-left">
                        <h2 className="ticket__form-title">
                            ПАРК
                        </h2>
                        <label className="ticket__form-label">
                            <select
                                className={`ticket__form-select ${errors.name ? 'ticket__form-select_error' : ''}`} {...register("branch", {
                                required: {
                                    message: 'Филиал обязателен к заполнению',
                                    value: true
                                }
                            })}>
                                <option hidden={true} selected={true}>Выберите парк</option>
                                <option value="sky">SKY-PARK АЛА АРЧА</option>
                                <option value="techno">SMAGIC ТЕНХОПАРК</option>
                                <option value="tsum">SMAGIC ЦУМ</option>
                                <option value="tommy">SMAGIC ТОММИ МОЛ</option>
                            </select>
                        </label>
                        <h2 className="ticket__form-title">
                            ВИД БИЛЕТА
                        </h2>
                        <label className='ticket__form-label'>
                            <button type={"button"} className="ticket__form-minus"
                                    onClick={() => setThreeTicket(prevState => {
                                        return prevState === 0 ? 0 : prevState - 1
                                    })}>-
                            </button>
                            <input {...register('threeYearsOld', {
                                required: {
                                    message: 'Вы не выбрали количество билетов',
                                    value: true
                                },
                                min: {
                                    value: 1,
                                    message: "Выберите количество билетов"
                                }
                            })} className={`ticket__form-input ${errors.name ? 'ticket__form-input_error' : ''}`}
                                   value={threeTicket} readOnly={true} type="number" min="0" max="100"/>
                            <button type={"button"} onClick={() => setThreeTicket(prevState => prevState + 1)}
                                    className="ticket__form-plus">+
                            </button>
                        </label>
                        <p className="ticket__form-txt">
                            от 1 года до 3х лет
                        </p>
                        <label className='ticket__form-label'>
                            <button type={"button"} className="ticket__form-minus"
                                    onClick={() => setSixteenTicket(prevState => {
                                        return prevState === 0 ? 0 : prevState - 1
                                    })}>-
                            </button>
                            <input {...register('sixteenYearsOld', {
                                required: {
                                    message: 'Вы не выбрали количество билетов',
                                    value: true
                                },
                                min: {
                                    value: 1,
                                    message: "Выберите количество билетов"
                                }
                            })} className={`ticket__form-input ${errors.name ? 'ticket__form-input_error' : ''}`}
                                   value={sixteenTicket} readOnly={true} type="number" min="0" max="100"/>
                            <button type={"button"} onClick={() => setSixteenTicket(prevState => prevState + 1)}
                                    className="ticket__form-plus">+
                            </button>
                        </label>
                        <p className="ticket__form-txt">
                            от 4х лет до 16ти лет
                        </p>
                    </div>
                    <div className="ticket__form-img">
                        <img src={logo} alt="Smagic"/>
                    </div>
                </div>
                <div className="ticket__form-row">
                    <p className="ticket__form-txt">
                        *Купленный билет действителен <br/>
                        в тот же день до закрытия парка
                    </p>
                    <div className="ticket__form-right">
                        <div className="ticket__total">
                                <h2 className="ticket__form-title">
                                    Сумма
                                </h2>
                                <div className="ticket__price">
                                    {threeTicket * 100 + sixteenTicket * 100}
                                </div>

                            </div>

                            <button type={"submit"} className={"ticket__form-btn"}>КУПИТЬ</button>

                    </div>
                </div>

            </form>
        </div>
);
};

export default Ticket;