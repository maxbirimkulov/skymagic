import React from 'react';
import "./AccountMain.scss"
import AccountInfo from "./AccountInfo/AccountInfo";
import AccountNav from "./AccountNav/AccountNav";
import {Route, Routes} from "react-router-dom";
import AccountBuy from "./AccountBuy/AccountBuy";
import {useSelector } from 'react-redux'

const AccountMain = () => {
    return (
        <div className="account__main">
            <AccountNav/>
            <Routes>
                <Route path="/info" element={<AccountInfo/>} />
                <Route path="/buy" element={<AccountBuy/>} />
            </Routes>

        </div>
    );
};

export default AccountMain;