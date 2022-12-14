import React from 'react';
import "./AboutPark.scss"

const AboutPark = ({dataPark}) => {
    return (
        <section className='aboutPark'>
            <div className="container">
                <div className="aboutPark__left">
                    <div className="aboutPark__block">
                        <h2 className="aboutPark__title">{dataPark.title}</h2>
                        <h3>{dataPark.areatitle}</h3>
                        <ul>{
                            dataPark.areatext.map((el,idx)=>{
                                return (
                                    <li key={idx}>{el}</li>
                                )
                            })
                        }
                        </ul>
                        <h3>{dataPark.about}</h3>
                    </div>
                    <div className="aboutPark__block">

                        <h2 className="aboutPark__title">{dataPark.zonestitle}</h2>
                        <p>{dataPark.zones}</p>
                        <h2 className="aboutPark__title">Атракционы</h2>
                        <ul>{
                            dataPark.attractions.map((el,idx)=>{
                                return (
                                    <li key={idx}>{el}</li>
                                )
                            })
                        }
                        </ul>
                    </div>

                </div>
                <div className="aboutPark__right">
                    <ul className="aboutPark__right-block">
                        {
                            dataPark.gamecomplex.map((el,idx)=>{
                                return (
                                    <li key={idx}>{el}</li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>

        </section>
    );
};

export default AboutPark;