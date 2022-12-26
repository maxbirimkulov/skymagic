import React from 'react';
import './Video.scss'

const Video = () => {
    return (
    <div className="video">
    <div className="video__card">
        <h2 className="video__title">Hello</h2>
        <div className="video__youtube-wrapper">
            <iframe src="https://www.youtube.com/embed/-3Blz4b0Xjg"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
        <p className="vide0__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quae!
        </p>
    </div>
    <div className="video__card">
        <h2 className="video__title">Hello</h2>
        <div className="video__youtube-wrapper">
            <iframe src="https://www.youtube.com/embed/-3Blz4b0Xjg"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
        <p className="vide0__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quae!
        </p>
    </div>
    <div className="video__card">
        <h2 className="video__title">Hello</h2>
        <div className="video__youtube-wrapper">
            <iframe src="https://www.youtube.com/embed/l6WDSN-_HSI"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
        <p className="vide0__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quae!
        </p>
    </div>

    </div>
    );
};

export default Video;