import React from 'react';
import './DownloadButton.scss'

const DownloadButton = ({text}) => {


    return (
        <>
            <a href='' className='downloadButton downloadButton_desktop'>
                <span className='first'/>
                <span className='second'/>
                <span className='third'/>
                <span className='fourth'/>
                {text}
            </a>


        </>

    );
};

export default DownloadButton;