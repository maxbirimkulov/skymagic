import React, {useEffect} from 'react';
import ReviewForm from "./ReviewForm/ReviewForm";
import './Reviews.scss'

import Rating from "@mui/material/Rating";
import {useDispatch, useSelector} from "react-redux";
import {getReviews,changeBranch} from "../../redux/reducers/reviews";
import {toDate} from "../../utils/formatDate";
import BranchMenu from "../../Components/BranchMenu/BranchMenu";

const Reviews = () => {
    const {data, filter} = useSelector((s) => s.reviews )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReviews(filter))

    }, [filter.branch])

    return (
        <section>
            <div className="container">

                <div className="reviews__skypark">
                    <BranchMenu changeBranch={changeBranch} route={'reviews'}/>
                    <div className='reviews__box'>

                        {
                            data.map(el =>(
                                <div className="reviews__one">
                                    <div key={el.id} className='reviews__module'>
                                        <h3>ИМЯ : {el.name}</h3>
                                        <p>{el.text}</p>
                                        <p>{toDate(el.createdAt)}</p>
                                        <p>{el.branch}</p>
                                        <h4>
                                            <Rating name="read-only" value={el.rating} readOnly />
                                        </h4>

                                    </div>
                                </div>
                            ))
                        }
                </div>
                </div>
                <ReviewForm/>


            </div>
        </section>
    )
};

export default Reviews;