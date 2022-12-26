import React from 'react';
import {useSelector} from "react-redux";
import "./AccountInfo.scss"
const AccountInfo = () => {

    const {user} = useSelector((store)=> store.user )
    console.log(user)
    return (
        <div className='account__info account__section'>
            <div className="account__container">
                <div className="account__box">
                    <h2 className="account__title">Логин</h2>
                    <h2 className="account__text">{user.login}</h2>
                </div>
                <div className="account__box">
                    <h2 className="account__title">Email</h2>
                    <h2 className="account__text">{user.email}</h2>
                </div>
                <div className="account__box">
                    <h2 className="account__title">Имя</h2>
                    <h2 className="account__text">{user.name}</h2>
                </div>
                <div className="account__box">
                    <h2 className="account__title">Фамилия</h2>
                    <h2 className="account__text">{user.surname}</h2>
                </div>
                <div className="account__box">
                    <h2 className="account__title">Возраст</h2>
                    <h2 className="account__text">{user.age}</h2>
                </div>
                <div className="account__box">
                    <h2 className="account__title">Пол</h2>
                    <h2 className="account__text">{user.gender}</h2>
                </div>
                <div className="account__box">
                    <h2 className="account__title">Телефон</h2>
                    <h2 className="account__text">{user.phone}</h2>
                </div>


            </div>
        </div>
    );
};

export default AccountInfo;