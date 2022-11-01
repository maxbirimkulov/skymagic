import React from 'react';
import Baner from "./Baner/Baner";
import Parks from "./Parks/Parks";
import Stock from "./Stock/Stock";
import Projects from "./Our projects/projects";

const Home = () => {
    return (
        <>
        <Baner/>
            <Parks/>
            <Stock/>
            <Projects/>


        </>
    );
};

export default Home;