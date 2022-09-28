import React from 'react';
import Place from "./Place/Place";
import Price from "./Price/Price";
import {Navigate, useParams} from "react-router-dom";

const Park = () => {
    const params = useParams()


    if (params.name !== 'park') {
        return <Navigate to='/'/>
    }
    return (
        <>
            <Place/>
            <Price/>
        </>
    );
};

export default Park;