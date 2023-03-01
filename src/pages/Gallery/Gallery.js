import React, {useEffect} from 'react';
import "./Gallery.scss"
import Fancybox from "./Fancybox/Fancybox";
import {useDispatch, useSelector} from "react-redux";
import {getGallery} from "../../redux/reducers/gallery";
import {ToastContainer} from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


const Gallery = () => {
    const dispatch = useDispatch()

    const {data, error, status, filter} = useSelector((s) => s.gallery )

    useEffect(() => {
        dispatch(getGallery())

    }, [])
    console.log(data)

    return (
        <section className="gallery">
            <div className="container">

                {error.length ? <div>
                    <h2 className='gallery__error'>{error}</h2>
                    <p>На экране выведен старый список картин</p>
                </div> : ''}

                {
                    status === 'loading' ? '' :
                        <div className="gallery__sliders">
                            {
                                <Swiper
                                    direction={"vertical"}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="gallery_tsum"
                                >

                                    {
                                        data.filter(el=> el.branch === "tsum").map(item => (
                                            <SwiperSlide>
                                                <Fancybox key={item.id}>
                                                    <div className="photo__wrapper">
                                                        <div className="photo__box">
                                                            <a data-fancybox="gallery" data-caption={item.text}
                                                               href={`${process.env.REACT_APP_URL}${item.imageUrl}`}>
                                                                <img className="photo__img" alt="" src={`${process.env.REACT_APP_URL}${item.imageUrl}`}/>
                                                            </a>
                                                            <h2>{item.branch}</h2>
                                                        </div>
                                                    </div>
                                                </Fancybox>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>



                            }
                        </div>
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