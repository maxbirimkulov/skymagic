import React, {useEffect} from 'react';
import './OneVacancie.scss'
import {useDispatch, useSelector} from "react-redux";
import {getVacancies} from "../../redux/reducers/vacancies";
import {useLocation} from "react-router-dom";

const OneVacancy = () => {
    const {data } = useSelector((s)=>s.vacancies)
    const {pathname} = useLocation()
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getVacancies())
    },[])

    return (
        <section className='oneVacancy'>
            <div className="container">
                {
                    data.filter((el)=> el._id === pathname.split("/")[2]).map((el,idx)=>(
                        <div className="oneVacancy__wrapper" key={el._id}>
                            <h3 className={"oneVacancy__name"}>{el.title}</h3>
                            <h5 className={"oneVacancy__text"}>{el.description}</h5>
                            <div className="oneVacancy__lists">
                                <ul className="oneVacancy__ul">
                                    <h3 className="oneVacancy__name">Обязаности</h3>
                                    {el.responsibilities.map((item)=>(
                                        <li key={el.id} className="oneVacancy__li">{item.text}</li>
                                    ))}
                                </ul>
                                <ul className="oneVacancy__ul">
                                    <h3 className="oneVacancy__name">Требование</h3>
                                    {el.requirement.map((item)=>(
                                        <li key={el.id} className="oneVacancy__li">{item.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="vacancies__block">
                                <h3 className={"oneVacancy__name"}>Зарплата:</h3>
                                <p className='vacancies__salary'>{el.salary}</p>
                            </div>

                            <div className="vacancies__block">
                                <h3 className={"oneVacancy__name"}>График:</h3>
                                <p className='vacancies__skills'>{el.graph}</p>
                            </div>

                        </div>
                    ))
                }


            </div>
        </section>
    );
};

export default OneVacancy;