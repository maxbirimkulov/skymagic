import React from 'react';
import './Ticket.scss'
const Ticket = () => {
    return (
        <div className="ticket">
            <div className="ticket__col">
                <div className="ticket__col-row">
                    <div className="ticket__place">
                        <div className="ticket__place-name">SEC</div>
                        <h4 className="ticket__place-numb">02</h4>
                    </div>
                    <div className="ticket__place">
                        <div className="ticket__place-name">SEC</div>
                        <h4 className="ticket__place-numb">02</h4>
                    </div>
                    <div className="ticket__place">
                        <div className="ticket__place-name">SEC</div>
                        <h4 className="ticket__place-numb">02</h4>
                    </div>
                </div>
                <h3>admit one</h3>
            </div>
             <div className="ticket__info">
                 <div className="ticket__col1">
                     <h2>SKY MAGIC</h2>
                     <h3>Парк развлечении</h3>
                     <h4>27.06.22</h4>
                     <h4>12:20</h4>
                     <h5>Имя</h5>
                     <h5>Фамилия</h5>
                 </div>
                 <div className="ticket__col1">
                     <h2>No 3212</h2>
                     <h3>15$</h3>
                 </div>
             </div>

        </div>
    );
};

export default Ticket;