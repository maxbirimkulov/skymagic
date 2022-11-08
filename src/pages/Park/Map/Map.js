import React from 'react';
import "./Map.scss"
const Map = () => {
    return (
        <section className="map">
           <div className="container">
               <div className="map__google">
                   <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.0932132720136!2d74.5819391141499!3d42.8286447791582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d43eac0e11%3A0x5677e74e53eafc07!2sSky%20Park!5e0!3m2!1sru!2skg!4v1664888891532!5m2!1sru!2skg"
                       allowFullScreen="" loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade" title="google map"></iframe>
               </div>
               <div className="map__txt">
                   <h2>Локация:</h2>
                   <br/>
                 <h3>Г. Бишкек, пр. Ч. Айтматова 299в,  <br/> <br/>
                     ТРЦ "Ала-Арча"</h3>

               </div>
           </div>
        </section>
    );
};

export default Map;