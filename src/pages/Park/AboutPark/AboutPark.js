import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import AboutParkTab from "./AboutParkTab/AboutParkTab";
import data from "../../../utils/data";
import "./AboutPark.scss"
const AboutPark = () => {
    const [cards, setCards] = useState(data.filter(el => el.category === 'аттракционы'))
    const [ activeBtn, setActiveBtn ] = useState(0)
    const buttons = data.reduce((acc,el)=>{
        if (acc.includes(el.category)) return acc;
        return [...acc,el.category]
    },[])
    const handleFilter = (selector,e) => {
        setActiveBtn(+e.target.dataset.index)
        setCards(data.filter(el => el.category === selector))

    }
    return (
        <section className="about-park">
            <div className="container">
                <div className="about-park__tabs">
                    {
                        buttons.map((btn,idx) =>(
                            <AboutParkTab
                                active={idx === activeBtn ? 'active' : ''}
                                key={idx}
                                text={btn}
                                idx={idx}
                                handleClick={(e)=>handleFilter(btn,e)}
                            />
                        ))
                    }
                </div>
                <motion.div className="about-park__content"
                            animate={{y: [100, 0]}}
                            transition={{
                                ease: "easeOut",
                                duration: 4,

                            }}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                >
                    {
                        <AnimatePresence initial={false} exitBeforeEnter>
                            {
                                cards.map(el => (
                                    <motion.div
                                        className="about-park__card"
                                        key={el.id}
                                    >
                                        <div className="about-park__img">
                                            <motion.img src={el.img} alt={el.title} className="about-park__img-item"
                                                        animate={{
                                                            opacity: 1
                                                        }}
                                                        transition={{

                                                            duration: 1,
                                                        }}
                                                        exit={{opacity: 0}}
                                                        initial={{opacity: 0}}
                                            />
                                        </div>

                                        <h3 className="about-park__txt">{el.title}</h3>
                                    </motion.div>
                                ))
                            }
                        </AnimatePresence>
                    }
                </motion.div>

            </div>
        </section>
    )


};

export default AboutPark;
