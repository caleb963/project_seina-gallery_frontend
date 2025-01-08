import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <section className="home">
            <h1 className="home__title">Welcome to Seina Art Gallery</h1>
            <img className="home__image" src='/assets/Seina.png' alt='Seina' />
        </section>
    )
}

export default Home;