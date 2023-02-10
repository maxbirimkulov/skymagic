import React from 'react';
import {motion} from "framer-motion";
import "./AboutParkTab.scss"

const AboutParkTab = (props) => {
    const {
        text,
        handleClick = Function.prototype,
        active,idx
    } = props;
    return (
        <>

            <motion.button className={`aboutParkTab ${active}`}
                           onClick={handleClick} data-index={idx}>
                {text}
            </motion.button>
        </>
    );
};

export default AboutParkTab;