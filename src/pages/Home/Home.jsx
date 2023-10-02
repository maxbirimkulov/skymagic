import React from 'react';
import Baner from "./Baner/Baner";
import Parks from "./Parks/Parks";
import Stock from "./Stock/Stock";
import Price from './PriceTicket/Price'
import HomeGallery from "./HomeGallery/HomeGallery";
import HomeBannerLast from "./HomeBannerLast/HomeBannerLast";




const Home = () => {
    return (
        <>
            <Baner/>
            <Parks/>
            <Stock/>
            <Price/>
<HomeBannerLast/>
            <HomeGallery/>





        </>
    );
};

export default Home;