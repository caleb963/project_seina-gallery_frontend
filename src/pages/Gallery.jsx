import React, {useState} from 'react';``
import 'react-image-gallery/styles/css/image-gallery.css';
import "../styles/Gallery.css";

const images = [
    {
        original : '/assets/colorful_darkness.png',
        thumbnail: '/assets/colorful_darkness_thumb.png',
        description: 'Colorful Darkness',
        price: 65,
    },
    {
        original: '/assets/dmitrp.png',
        thumbnail: '/assets/dmitrp.png',
        description: 'dmtrip',
        price: 400,
    },
    {
        original: '/assetsfuel_spectrum.png',
        thumnail: '/assets/fuel_spectrum_thumbnail.png',
        description: 'Fuel Spectrum',
        price: 75,
    },
    {
        original: '/assets/hikuriwari.png',
        thumbnail: '/assets/hikuriwari_thumb.png',
        description: 'Hikuriwari',
        price: 250,
    },
    {
        original: '/assets/horusis.png',
        thumbnail: '/assets/horusis_thumb.png',
        description: 'Horusis',
        price: 100,
    },
    {
        original: '/assets/linear_space.png',
        thumbnail: '/assets/linear_space_thumb.png',
        description: 'Linear Space',
        price: 170,
    },
    {
        original: '/assets/purple_shiness.png',
        thumbnail: '/assets/purple_shiness_thumb.png',
        description: 'Purple Shiness',
        price: 80,  
    },
    {
        original: '/assets/mirror.png',
        thumbnail: '/assets/mirror_thumb.png',
        description: 'mirror',
        price: 200,
    },
    {
        original: '/assets/through_window.png',
        thumbnail: '/assets/through_window_thumb.png',
        description: 'Through Window',
        price: 130,
    },
    {
        original: '/assets/unacknoledged.png',
        thumbnail: '/assets/unacknoledged_thumb.png',
        description: 'Unacknoledged', 
        price: 190,  
    },
    {
        original: '/assets/waterfall.png',
        thumbnail: '/assets/waterfall_thumb.png',
        description: 'Waterfall', 
        price: 90,
    },
    {
        original: '/assets/pink_lights.png',
        thumbnail: '/assets/pink_lights_thumb.png',
        description: 'Pink Lights',
        price: 210,
    },
    {
        original: '/assets/zeldacell.png',
        thumbnail: '/assets/zeldacell_thumb.png',
        description: 'Zeldacell',
        price: 140,
    }
]

function Gallery() {
    const [cart, setCart] = useState([]);

    const addToCart = (image) => {
        setCart((prevCart) => [...prevCart, image]);
    };
    
    return (
        <section className="gallery">
            <h2 className="gallery__title">Gallery</h2>
            <div className="gallery__grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery__item">
                        <img src={image.thumbnail} alt={image.description} className="gallery__image"/>
                        <div className="gallery__info">
                            <p className="gallery__description">{image.description}</p>
                            <p className="gallery__price">${image.price}</p>
                            <button className="gallery__button" onClick={() => addToCart(image)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;