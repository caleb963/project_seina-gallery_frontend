import React from 'react';
import './buy.css';

function Buy() {
    return (
        <section id="buy">
            <h1>Buy</h1>
            <form className='buy__form'>
                /* Add the form elements here */
            </form>
            <button className='buy__button' onClick={() => alert('Purchase simulated')}>Buy a painting</button>
        </section>
    );
}

export default Buy;