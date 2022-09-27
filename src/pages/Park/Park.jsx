import React from 'react';
import {useParams, Navigate} from "react-router-dom";


const Park = () => {

    const params = useParams()


    if (params.name !== 'park') {
        return <Navigate to='/'/>
    }
    return (
        <div>
            {params.name}
        </div>
    );
};

export default Park;