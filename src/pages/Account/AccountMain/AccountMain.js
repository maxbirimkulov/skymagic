import React from 'react';
import "./AccountMain.scss"
import AccountInfo from "./AccountInfo/AccountInfo";
import AccountNav from "./AccountNav/AccountNav";
import {Route, Routes} from "react-router-dom";

const AccountMain = () => {
    return (
        <div className="account__main">
            <AccountNav/>
            <Routes>
                <Route path="/info" element={<AccountInfo/>} />
            </Routes>

        </div>
    );
};

export default AccountMain;