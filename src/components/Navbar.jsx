import React from 'react';
import '../styles/Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li classname="navbar__item"><a href="#about-me">About Me</a></li>
                <li className="navbar__item"><a href="#gallery">Gallery</a></li>
                <li className = "navbar__item"><a href="#buy-form">Buy</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;