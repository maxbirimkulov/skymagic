import React from 'react';
import "./Map.scss"

const Map = ({dataPark}) => {
    return (
        <section className="map">
            <div className="container">
                <div className="map__txt">
                    <h2>Местоположение:</h2>
                    <br/>
                    <h3>{dataPark.locationText} <br/> <br/>
                        {dataPark.locationTc}</h3>
                </div>
                <div className="map__google">
                    <iframe
                        src={dataPark.location}
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" title="google map"></iframe>
                </div>

            </div>
        </section>
    );
};

export default Map;