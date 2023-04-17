import React, {useEffect, useState} from 'react';
import "./Gallery.scss"
import Fancybox from "./Fancybox/Fancybox";
import {useDispatch, useSelector} from "react-redux";
import {getGallery,changeBranch} from "../../redux/reducers/gallery";
import {ToastContainer} from "react-toastify";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {FreeMode, Navigation, Thumbs} from "swiper";
import BranchMenu from "../../Components/BranchMenu/BranchMenu";


const Gallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const dispatch = useDispatch()

    const {data, error, status, filter} = useSelector((s) => s.gallery)

    useEffect(() => {
        dispatch(getGallery(filter))

    }, [filter.branch])

    return (
        <section className="gallery">
            <div className="container">

                <BranchMenu changeBranch={changeBranch} route={'gallery'}/>
                {error.length ? <div>
                    <h2 className='gallery__error'>{error}</h2>
                    <p>На экране выведен старый список картин</p>
                </div> : ''}

                {
                    status === 'loading' ? '' :
                <div className="gallery__sliders">
                    {
                        data.map(item => (
                            <div className="photo__box">
                                <a data-fancybox="gallery" data-caption={item.text}
                                   href={`${process.env.REACT_APP_URL}${item.imageUrl}`}>
                                    <img className="photo__img" alt="" src={`${process.env.REACT_APP_URL}${item.imageUrl}`}/>
                                </a>
                            </div>
                        ))
                    }
                </div>

                //         <div className="gallery__sliders">
                //             {
                //                 <Swiper
                //                     style={{
                //                         "--swiper-navigation-color": "#fff",
                //                         "--swiper-pagination-color": "#fff",
                //                     }}
                //                     loop={true}
                //                     spaceBetween={10}
                //                     navigation={true}
                //                     thumbs={{swiper: thumbsSwiper}}
                //                     modules={[FreeMode, Navigation, Thumbs]}
                //                     className="mySwiper2"
                //                 >
                //                     {
                //                         data.map(item => (
                //                             <SwiperSlide key={item._id}>
                //                                 <Fancybox>
                //                                     <div className="photo__wrapper">
                //                                         <div className="photo__box">
                //                                             <a data-fancybox="gallery" data-caption={item.text}
                //                                                href={`${process.env.REACT_APP_URL}${item.imageUrl}`}>
                //                                                 <img className="photo__img" alt=""
                //                                                      src={`${process.env.REACT_APP_URL}${item.imageUrl}`}/>
                //                                             </a>
                //                                             <h2>{item.branch}</h2>
                //                                         </div>
                //                                     </div>
                //                                 </Fancybox>
                //                             </SwiperSlide>
                //                         ))
                //                     }
                //                 </Swiper>
                //
                //
                //             }
                //             <Swiper
                //                 onSwiper={setThumbsSwiper}
                //                 loop={true}
                //                 spaceBetween={10}
                //                 slidesPerView={4}
                //                 freeMode={true}
                //                 watchSlidesProgress={true}
                //                 modules={[FreeMode, Navigation, Thumbs]}
                //                 className="mySwiper"
                //             >
                //                 {
                //                     data.map(item => (
                //                         <SwiperSlide key={item._id}>
                //
                //                             <img className="photo__thumb" alt=""
                //                                  src={`${process.env.REACT_APP_URL}${item.imageUrl}`}/>
                //                         </SwiperSlide>))
                //                 }
                //             </Swiper>
                //
                //         </div>
                }
            </div>

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </section>
    );
};

export default Gallery;