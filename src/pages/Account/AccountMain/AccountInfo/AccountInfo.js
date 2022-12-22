import React from 'react';
import {useSelector} from "react-redux";

const AccountInfo = () => {

    const {user} = useSelector((store)=> store.user )

    return (
        <div className='account__info account__section'>
            {user.name}
        </div>
    );
};

export default AccountInfo;