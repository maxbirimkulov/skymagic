import React from 'react';
import DownloadButton from "../../Components/DownloadButton/DownloadButton";
import './Reviews.scss'


const Reviews = () => {

    return (
        <section className='reviews'>
            <div className="reviews container">
                <div className='reviews__box'>
                    <DownloadButton text={'Оставить отзыв'}/>
                </div>
                    <div className='reviews__all'>
                    <div className="reviews__card">
                    <ul className='reviews__lists'>
                        <li className='reviews__name'>Alibek</li>
                        <li className='reviews__text'>Все было круто, все атракционы понравилис, но обслуживание вашего сотрудника Рустама вообще не понравилось</li>
                        <li className='reviews__grade'>5 баллов</li>
                    </ul>
                </div>
                    <div className="reviews__card">
                    <ul className='reviews__lists'>
                        <li className='reviews__name'>Alibek</li>
                        <li className='reviews__text'>Все было круто, все атракционы понравилис, но обслуживание вашего сотрудника Рустама вообще не понравилось</li>
                        <li className='reviews__grade'>5 баллов</li>
                    </ul>
                </div>
                    <div className="reviews__card">
                    <ul className='reviews__lists'>
                        <li className='reviews__name'>Alibek</li>
                        <li className='reviews__text'>Все было круто, все атракционы понравилис, но обслуживание вашего сотрудника Рустама вообще не понравилось</li>
                        <li className='reviews__grade'>5 баллов</li>
                    </ul>
                </div>
                    <div className="reviews__card">
                        <ul className='reviews__lists'>
                            <li className='reviews__name'>Alibek</li>
                            <li className='reviews__text'>Все было круто, все атракционы понравилис, но обслуживание вашего сотрудника Рустама вообще не понравилось</li>
                            <li className='reviews__grade'>5 баллов</li>
                        </ul>
                    </div>
                    <div className="reviews__card">
                        <ul className='reviews__lists'>
                            <li className='reviews__name'>Alibek</li>
                            <li className='reviews__text'>Все было круто, все атракционы понравилис, но обслуживание вашего сотрудника Рустама вообще не понравилось</li>
                            <li className='reviews__grade'>5 баллов</li>
                        </ul>
                    </div>
                    <div className="reviews__card">
                        <ul className='reviews__lists'>
                            <li className='reviews__name'>Alibek</li>
                            <li className='reviews__text'>Все было круто, все атракционы понравилис, но обслуживание вашего сотрудника Рустама вообще не понравилось</li>
                            <li className='reviews__grade'>5 баллов</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews;