import React, {useEffect} from 'react';
import "./Reviews.scss"
import {useDispatch, useSelector} from "react-redux";
import {toDate} from "../../utils/formatDate";

import {getReviews} from "../../redux/reducers/reviews";
import {ToastContainer} from "react-toastify";
import ReviewForm from "./ReviewForm/ReviewForm";

const Reviews = () => {
    const dispatch = useDispatch()


    const {data,filter} = useSelector((s) => s.reviews )

    useEffect(() => {
        dispatch(getReviews(filter))

    }, [filter])

    return (
        <section className="reviews">
            <div className="container">
                <ReviewForm/>
                <div className="reviews__content">
                    {
                        data.map((item) => (
                            <div  className='reviews__card' key={item._id}>
                                <div className='reviews__card-top'>
                                    <h3 className='reviews__card-title'>{item.name}</h3>
                                    <p className='reviews__card-time'>{toDate(item.createdAt)}</p>
                                </div>

                                <p className='reviews__card-text'>{item.text}</p>
                            </div>
                        ))
                    }
                </div>
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

export default Reviews;