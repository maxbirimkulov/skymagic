import React, {useEffect} from 'react';
import './Vacancies.scss'
import img2 from './images/DSC_4921_DxO.jpg'
import {BsFillTelephoneFill} from 'react-icons/bs'
import  {FiMail} from 'react-icons/fi'
import {useDispatch, useSelector} from "react-redux";
import {getVacancies} from "../../redux/reducers/vacancies";
import {Link} from "react-router-dom";
import star from './STAR (1).png'
import {animateScroll} from "react-scroll";

const Vacancies = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };

    const {data}=useSelector((s)=>s.vacancies)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getVacancies())
    },[])
    console.log(data)
    return (
        <section className='vacancies'>
            <div className="vacancies__img">
                <h2 className='vacancies__title'>ПРИСОЕДИНЯЙСЯ
                    К НАШЕЙ КОМАНДЕ</h2>
            </div>
            <div className="container">
                <div className="vacancies__swipper">
                    <img src={img2} alt=""/>
                </div>
                <h2 className='vacancies__our'>НАШИ ПРЕИМУЩЕСТВА</h2>
                <div className="vacancies__icon">
                    <img className='vacancies__star' src={star} alt=""/>
                    <div className='vacancies__description'>
                        <h2>ЗАБОТА О КОМАНДЕ И ИНДИВИДУАЛЬНЫЙ ПОДХОД</h2>
                        <p>Наша компания глубоко заботится о своих работниках и стремится создать благоприятную и
                            поддерживающую рабочую среду. А также поощряем профессиональное развитие и рост наших
                            сотрудников.</p>
                    </div>
                </div>
                <div className="vacancies__icon">
                    <img className='vacancies__star' src={star} alt=""/>
                    <div className='vacancies__description'>
                        <h2>НАДЕЖНОСТЬ И ОТВЕТСВЕННОСТЬ</h2>
                        <p>Наша компания гордится своей надежностью и ответственным отношением к сотрудникам. Мы
                            обеспечиваем справедливые условия работы, предлагаем конкурентоспособную зарплату, бонусы
                            и стимулирующие программы, а также поддерживаем рабочую силу через обучение, развитие и
                            возможности карьерного роста.</p>
                    </div>
                </div>
                <div className="vacancies__icon">
                    <img className='vacancies__star' src={star} alt=""/>
                    <div className='vacancies__description'>
                        <h2>КОНКУРЕНТНЫЕ УСЛОВИЯ</h2>
                        <p>Наша компания гарантирует своим сотрудникам конкурентные условия, включая привлекательную
                            заработную плату, компенсацию и бонусные программы. Мы также предлагаем широкий спектр
                            преимуществ, включая гибкий график работы, программы поощрения и возможности для
                            профессионального развития.</p>
                    </div>
                </div>
                <div className="vacancies__icon">
                    <img className='vacancies__star' src={star} alt=""/>
                    <div className='vacancies__description'>
                        <h2>КОМАНДА ПРОФЕССИОНАЛОВ</h2>
                        <p>В нашей компании работают исключительные профессионалы, которые являются экспертами в
                            своей области. Мы гордимся командой высококвалифицированных специалистов, которые
                            привносят свой опыт и навыки для достижения выдающихся результатов.</p>
                    </div>
                </div>
                <h2 className='vacancies__vacancy'>ВАКАНСИИ:</h2>
                <div className="vacancies__all">
                    {data.map((el,idx)=>(
                            <div className="vacancies__one" key={el._id}>
                                <h3 className='vacancies__name'>{el.title}</h3>
                                {
                                    el.description.length >=120? el.description.slice(0,120) + ". . .":el.description
                                }
                                {/*<p className='vacancies__requirements'>{el.responsibilities[0]?.text}</p>*/}
                                {/*<p className='vacancies__schedule'>{el.requirement[0]?.text}</p>*/}
                                <div className="vacancies__block">
                                    <h3 className={"vacancies__name"}>Зарплата:</h3>
                                    <p className='vacancies__salary'>{el.salary}</p>
                                </div>
                                <div className="vacancies__block">
                                    <h3 className={"vacancies__name"}>График:</h3>
                                    <p className='vacancies__skills'>{el.graph}</p>
                                </div>

                                <Link to={el._id} onClick={()=>{
                                    toTop()
                                }}>
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