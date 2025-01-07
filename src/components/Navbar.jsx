import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item"><Link className="navbar__link" to='/'>Home</Link></li>
                <li className="navbar__item"><Link className="navbar__link" to='/about-me'>About Me</Link></li>
                <li className="navbar__item"><Link className="navbar__link" to='/gallery'>Gallery</Link></li>
                <li className="navbar__item"><Link className="navbar__link" to='/Cart'>Cart</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;