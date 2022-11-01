import React, {useState} from 'react';
import './Stock.scss'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

import {data} from "./data";

const Stock = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (

        <section className='stock'>
            <div className="stock__container container">
                <h2 className='stock__title'>Акции</h2>
                <div className="accordion">
                    {data && data.map((el, i) => (
                        <div className='accordion__content'>
                            <div className="accordion__subtitle" onClick={() => toggle(i)}>
                                <h3 className='accordion__stock'>{el.stock}</h3>
                                <span>{selected === i ? <AiOutlineMinus className='minus'/> : <AiOutlinePlus className='plus'/>}</span>
                            </div>
                            <p className={selected === i ? 'accordion__dsc accordion__show' : 'accordion__dsc'}>{el.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stock;