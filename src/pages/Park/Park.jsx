import React from 'react';
import Place from "./Place/Place";
import Price from "./Price/Price";
import {Navigate, useParams} from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";
import Map from "./Map/Map";

import {data2} from "../../data.js"
import AboutPark from "./AboutPark/AboutPark";
let dataPark =  data2["Sky Park"]

const Park = () => {
    const params = useParams()
    if (params.name !== 'park') {
        return <Navigate to='/'/>
    }
    return (
        <>
            <Place dataPark={dataPark}/>
            <AboutPark dataPark={dataPark}/>
            <Price dataPark={dataPark}/>
            <Portfolio dataPark={dataPark}/>
            <Map dataPark={dataPark}/>
        </>
    );
};

export default Park;