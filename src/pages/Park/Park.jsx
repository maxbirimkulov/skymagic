import React from 'react';
import Place from "./Place/Place";
import Price from "./Price/Price";
import {useParams} from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";
import Map from "./Map/Map";

import {data2} from "../../data.js"
import AboutPark from "./AboutPark/AboutPark";

const Park = () => {
    const params = useParams()

    let dataPark =  data2[`${params.name}`]
    return (
        <>

            <Place dataPark={dataPark}/>
            <Price dataPark={dataPark}/>
            <AboutPark dataPark={dataPark}/>
            <Portfolio dataPark={dataPark}/>

            <Map dataPark={dataPark}/>
        </>
    );
};

export default Park;