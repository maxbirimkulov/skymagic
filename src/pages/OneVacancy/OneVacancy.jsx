import React, {useEffect} from 'react';
import './OneVacancie.scss'
import {useDispatch, useSelector} from "react-redux";
import {getVacancies} from "../../redux/reducers/vacancies";

const OneVacancy = () => {
    const {data } = useSelector((s)=>s.vacancies)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getVacancies())
    },[])
    console.log(data)
    return (
        <section className='oneVacancy'>
            <div className="container">
                {
                    data.map((el,idx)=>(
                        <div>
                            <h3>{el.title}</h3>
                            <h5>{el.description}</h5>
                            <ul>
                                {el.responsibilities.map((item)=>(
                                    <li>{item.text}</li>
                                ))}
                            </ul>
                            <ul>
                                {el.requirement.map((item)=>(
                                    <li>{item.text}</li>
                                ))}
                            </ul>
                            <p className='vacancies__salary'>{el.salary}</p>
                            <p className='vacancies__skills'>{el.graph}</p>
                        </div>
                    ))
                }


            </div>
        </section>
    );
};

export default OneVacancy;