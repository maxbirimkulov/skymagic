import React, {useEffect} from 'react';
import ReviewForm from "./ReviewForm/ReviewForm";
import './Reviews.scss'
<<<<<<< HEAD
import {useSelector} from "react-redux";

const Reviews = () => {


=======
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
>>>>>>> 4d716ccc22af72c12dc0a95a92e45fb4215024a8
    return (
        <section>
            <div className="container">
                <ReviewForm/>

                <div className="reviews__skypark">
                    <BranchMenu changeBranch={changeBranch} route={'reviews'}/>
                    <div className='reviews__box'>
<<<<<<< HEAD
                        <div className="reviews__one">
                            {

                            }
                            <div className='reviews__module'>
                            <h3>ИМЯ:АЙНУРА</h3>
                            <p>Прекрастынй парк, дети
                                довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviews__skypark">
                    <h2>SKY PARK</h2>
                    <div className='reviews__box'>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviews__skypark">
                    <h2>SKY PARK</h2>
                    <div className='reviews__box'>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviews__skypark">
                    <h2>SKY PARK</h2>
                    <div className='reviews__box'>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
                        <div className="reviews__one">
                            <div className='reviews__module'>
                                <h3>ИМЯ:АЙНУРА</h3>
                                <p>Прекрастынй парк, дети
                                    довольны</p>
                            </div>
                        </div>
=======
                        {
                            data.map(el =>(
                                <div className="reviews__one">
                                    <div key={el.id} className='reviews__module'>
                                        <h3>ИМЯ:{el.name}</h3>
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

>>>>>>> 4d716ccc22af72c12dc0a95a92e45fb4215024a8
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Reviews;