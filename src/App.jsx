import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Buy from './pages/Buy';
import AboutMe from './pages/Aboutme';
import Gallery from './pages/Gallery';
import './styles/App.css'

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Gallery/>} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/about-me" element={<AboutMe />} />
            </Routes>
        </Router>
    );
}

export default App;