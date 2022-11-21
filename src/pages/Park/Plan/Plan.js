import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Plan.scss";
import { ReactComponent as HeroSvg } from "./heroN.svg";
import ring from './ring.webp'
import ringF from './ringF1.webp'
import ringB from './ringB1.webp'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
export default function App() {
    const textRef = useRef(null);
    const DeepRef = gsap.utils.selector(textRef);
    useEffect(() => {
        let tl = gsap.timeline();

            MotionPathPlugin.convertToPath("ellipse");

        tl.to(".slide-ring__ring", {
            duration: 5,
            repeat: -1,
            motionPath: {
                path: DeepRef("#ellipse")[0],
                align: DeepRef("#ellipse")[0],
                alignOrigin: [1, 1]
            },
            ease: "none"
        });
    }, []); // !!! Missing dependency array

    return (
        <div className="slide-ring" ref={textRef}>
            <div className="slide-ring__back">
                <img src={ringB} alt="ring"/>
            </div>
            <div className="slide-ring__ring">
                <img src={ring} alt="ring"/>
            </div>
            <div className="slide-ring__front">
                <img src={ringF} alt="ring"/>
            </div>
            <HeroSvg />
        </div>
    );
}
