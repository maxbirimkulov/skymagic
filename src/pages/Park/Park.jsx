import React from 'react';
import Place from "./Place/Place";
import Price from "./Price/Price";
import {Navigate, useParams} from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";
import Map from "./Map/Map";

const Park = () => {
    const params = useParams()


    if (params.name !== 'park') {
        return <Navigate to='/'/>
    }
    return (
        <>
            <Place/>
            <Price/>
            <Portfolio/>
            <Map/>
        </>
    );
};

export default Park;