import React from 'react';
import "./Account.scss"

import AccountHeader from "./AccountHeader/AccountHeader";
import AccountFooter from "./AccountFooter/AccountFooter";
import AccountMain from "./AccountMain/AccountMain";

const Account = () => {
    return (
        <div className="account">
                <AccountHeader/>
            <div className="container">
                <AccountMain/>
            </div>
                <AccountFooter/>


        </div>
    );
};

export default Account;