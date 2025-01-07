import React from 'react';
import '../styles/Gallery.css';

const images = [
    'colorful_darkness.png',
    'Dimitrip.png',
    'fuel_spectrum.png',
    'hikuriwari.png',
    'horusis.png',
    'linear_space.png',
    'puprle_shiness.png',
    'sweet_home.png',
    'through_window.png',
    'unacknowledged_legion.png',
    'waterfall.png',
   'xangalicious.png',
   'zeldacell.png',
]

function Gallery() {
    return (
       < section id="gallery">
            <h2>Gallery</h2>
            <div className="gallery__grid">
                {images.map((image, index) => (
                <div key={index} className="gallery__item">
                    <img src={`/assets/${image}`} alt={`Gallery image ${index + 1}`} />
                </div>
                ))}
            </div>
       </ section>
    );
}

export default Gallery;