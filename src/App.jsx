import React from 'react';
import Navbar from '../components/Navbar';
import AboutMe from '../components/Aboutme';
import Gallery from '../components/Gallery';
import Buy from '../components/Buy';
import './blocks/App.css'

function App() {
    return (
        <div className='app'>
            <Navbar />
            <main>
            <AboutMe />
            <Gallery />
            <Buy />
            </main>
        </div>
    );
}

export default App;