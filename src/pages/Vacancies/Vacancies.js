
import React, {useEffect} from 'react';
import './Vacancies.scss'
import img1 from './images/DSC_4951_DxO.jpg'
import img2 from './images/DSC_4921_DxO.jpg'
import {BsFillTelephoneFill} from 'react-icons/bs'
import  {FiMail} from 'react-icons/fi'
import {useDispatch, useSelector} from "react-redux";
import {getVacancies} from "../../redux/reducers/vacancies";
import {Link} from "react-router-dom";

const Vacancies = () => {

    const {data}=useSelector((s)=>s.vacancies)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getVacancies())
    },[])
    console.log(data)
    return (
        <section className='vacancies'>
            <div className="vacancies__img">
                <h2 className='vacancies__title'>ПРИСОЕДИНЯЙСЯ <br/>
                    К НАШЕЙ КОМАНДЕ</h2>
            </div>
            <div className="container">
                <div className="vacancies__swipper">
                    <img src={img2} alt=""/>
                </div>
                <h2 className='vacancies__our'>НАШИ ПРЕИМУЩЕСТВА</h2>
                <div className='vacancies__icon'>
                    <div className="vacancies__icons">
                        <p>ЗАБОТА О КОМАНДЕ
                            И ИНДИВИДУАЛЬНЫЙ
                            ПОДХОД</p>
                    </div>
                    <div className="vacancies__icons">
                        <p>НАДЕЖНОСТЬ
                            И ОТВЕТСВЕННОСТЬ</p>
                    </div>
                    <div className="vacancies__icons">
                        <p>КОНКУРЕНТНЫЕ
                            УСЛОВИЯ</p>
                    </div>
                    <div className="vacancies__icons">
                        <p>КОМАНДА
                            ПРОФЕССИОНАЛОВ</p>
                    </div>
                </div>
                <h2 className='vacancies__vacancy'>ВАКАНСИИ:</h2>
                <div className="vacancies__all">
                    {data.map((el,idx)=>(
                        <div className="vacancies__one" key={el._id}>
                            <h3 className='vacancies__name'>{el.title}</h3>
                            <h5 className='vacancies__text'>{el.description}</h5>
                            <p className='vacancies__requirements'>{el.responsibilities[0]?.text}</p>
                            <p className='vacancies__schedule'>{el.requirement[0]?.text}</p>
                            <p className='vacancies__salary'>{el.salary}</p>
                            <p className='vacancies__skills'>{el.graph}</p>
                            <Link to={el._id}>
                                <button>Подробнее</button>
                            </Link>
                        </div>
                        )

                    )}


                </div>

            </div>
            <div className="vacancies__footer">
                <h2>СВЯЗАТЬСЯ С HR ОТДЕЛОМ</h2>
                <div className="vacancies__contact">
                    <p> <span><BsFillTelephoneFill/></span>+996 771 780 708</p>
                    <p><span>{<FiMail/>}</span>Smagic@gmail.com</p>
                </div>
            </div>
        </section>
    );
};

export default Vacancies;