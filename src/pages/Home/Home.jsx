import React from 'react';
import Baner from "./Baner/Baner";
import Parks from "./Parks/Parks";
import Stock from "./Stock/Stock";
import Price from './PriceTicket/Price'
import Loyalty from "./Loyalty/Loyalty";
import HomeGallery from "./HomeGallery/HomeGallery";



const Home = () => {
    return (
        <>
            <Baner/>
            <Parks/>
            <Stock/>
            <Price/>
            <Loyalty/>
            <HomeGallery/>



        </>
    );
};

export default Home;