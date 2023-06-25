import React, {useEffect} from 'react';
import './AllStock.scss'
import {useDispatch, useSelector} from "react-redux";
import {getSales} from "../../redux/reducers/sales";


const AllStock = () => {
    const {data} = useSelector(s=>s.sales)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSales())
    },[])
    return (
        <section className='allStock'>
            <div className="allStock__container container">
                <h2 className='allStock__title'>АКЦИИ И СОБЫТИЯ</h2>
                {
                    data.map(el=>(
                        <div key={el.id} className="allStock__oneStock">
                            <img className='allStock__img' src={`${process.env.REACT_APP_URL}${el.images}`} alt=""/>
                            <div className="allStock__info">
                                <h2 className='allStock__name'>{el.title}</h2>
                                <p className='allStock__text'>{el.descriptionFull}</p>
                                <div className='allStock__clock'>
                                    <p className='allStock__date'>{el.date}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default AllStock;