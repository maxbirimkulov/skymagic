import React from 'react';
import './DownloadButton.scss'

const DownloadButton = ({text}) => {


    return (
        <>
            <button type='submit' className='downloadButton downloadButton_desktop'>
                <span className='first'/>
                <span className='second'/>
                <span className='third'/>
                <span className='fourth'/>
                {text}
            </button>


        </>

    );
};

export default DownloadButton;