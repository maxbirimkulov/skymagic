import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import "./Plan.scss";

import { ReactComponent as HeroSvg } from "./heroN.svg";
import ring from './ring.webp'
import ringF from './ringF1.webp'
import ringB from './ringB1.webp'



export default function App() {
    const textRef = useRef();
    const DeepRef = gsap.utils.selector(textRef);
    useEffect(() => {

        gsap.core.globals("ScrollTrigger", ScrollTrigger);
        gsap.core.globals("MotionPathPlugin", MotionPathPlugin);
        gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

        MotionPathPlugin.convertToPath("ellipse");

        let tl = gsap
            .timeline(
            {
                defaults: {},
                scrollTrigger: {
                    trigger: textRef,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.5,
                    markers: true,
                    toggleActions: "play pause resume reset"
                }
            }
        )

        .to(".slide-ring__ring", {
            ease: "none",

            motionPath: {
                path: DeepRef("#ellipse")[0],
                align: DeepRef("#ellipse")[0],
                alignOrigin: [1, 1]
            },
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
