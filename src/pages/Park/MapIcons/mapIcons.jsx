import React,{useState} from 'react';
import './mapIcons.scss'
import {motion,useAnimation} from "framer-motion";
import bank from './assets/Банк.png'






const MapIcons = () => {

    const [activeElement, setActiveElement] = useState(null);
    const animationControls = useAnimation();

    const handleMouseEnter = async (elementId) => {
        animationControls.start({ x: [-10, 10, -10, 10, 0] }); // Анимация дергания
        await animationControls.start({ x: 0 }); // Завершение анимации
        setActiveElement(elementId);
    };

    const handleMouseLeave = () => {
        setActiveElement(null);
    };

    const elements = [
        { id: 1, text: 'Элемент 1' },
        { id: 2, text: 'Элемент 2' },
        { id: 3, text: 'Элемент 3' }
    ];

    const variants = {
        visible: { opacity: 1, scale: 1,transition:{duration:1} },
        hidden: { opacity: 0, scale: 0 }
    };

    return (
        <section className='mapIcons'>
            <div className="mapIcons__container container">
                <div>
                    {elements.map((element) => (
                        <motion.div
                            key={element.id}
                            className="element"
                            onMouseEnter={() => handleMouseEnter(element.id)}
                            onMouseLeave={handleMouseLeave}
                            initial={{ x: 0 }}
                            animate={activeElement === element.id ? 'visible' : 'hidden'}
                        >
                            {element.text}
                            {activeElement === element.id && (
                                <motion.div
                                    className="popup"
                                    variants={variants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Это всплывающее окно для элемента {element.text}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default MapIcons;