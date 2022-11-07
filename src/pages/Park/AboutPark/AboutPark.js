import React from 'react';
import "./AboutPark.scss"

const AboutPark = ({dataPark}) => {
    return (
        <section className='aboutPark'>
            <div className="container">
                <div className="aboutPark__left">
                    <h2>{dataPark.title}</h2>
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
                    <h2>{dataPark.zonestitle}</h2>
                    <p>{dataPark.zones}</p>
                    <h2>Атракционы</h2>
                    <ul>{
                        dataPark.attractions.map((el,idx)=>{
                            return (
                                <li key={idx}>{el}</li>
                            )
                        })
                    }
                    </ul>
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