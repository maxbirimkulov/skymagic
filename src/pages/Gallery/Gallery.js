import React, {useEffect} from 'react';
import "./Gallery.scss"
import Fancybox from "./Fancybox/Fancybox";
import {useDispatch, useSelector} from "react-redux";
import {getGallery} from "../../redux/reducers/gallery";
import {ToastContainer} from "react-toastify";


const Gallery = () => {
    const dispatch = useDispatch()

    const {data, error, status, filter} = useSelector((s) => s.gallery )

    useEffect(() => {
        dispatch(getGallery())

    }, [])

    return (
        <section className="gallery">
            <div className="container">

                {error.length ? <div>
                    <h2 className='gallery__error'>{error}</h2>
                    <p>На экране выведен старый список картин</p>
                </div> : ''}

                {
                    status === 'loading' ? '' : <Fancybox>
                        <div className="photo__wrapper">
                            {
                                data.map(item => (
                                    <div className="photo__box">
                                        <a data-fancybox="gallery" data-caption={item.text}
                                           href={`http://localhost:4444${item.imageUrl}`}>
                                            <img className="photo__img" alt="" src={`http://localhost:4444${item.imageUrl}`}/>
                                        </a>
                                    </div>
                                ))
                            }

                        </div>
                    </Fancybox>
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