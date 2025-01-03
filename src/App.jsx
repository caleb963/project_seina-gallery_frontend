import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './pages/Aboutme';
import Gallery from './pages/Gallery';
import Buy from './pages/Buy';
import './styles/App.css'

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