import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-me'>About Me</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/Cart'>Cart</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;