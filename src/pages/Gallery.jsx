import React, {useState} from 'react';``
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original : '/assets/colorful_darkness.png',
        thumbnail: '/assets/colorful_darkness_thumb.png',
        description: 'Colorful Darkness - $65',
        price: 65,
    },
    {
        original: '/assets/Dimitrip.png',
        thumbnail: '/assets/Dimitrip_thumb.png',
        description: 'Dimitrip - $125',
        price: 125,
    },
    {
        original: '/assetsfuel_spectrum.png',
        thumnail: '/assets/fuel_spectrum_thumbnail.png',
        description: 'Fuel Spectrum - $75',
        price: 75,
    },
    {
        original: '/assets/hikuriwari.png',
        thumbnail: '/assets/hikuriwari_thumb.png',
        description: 'Hikuriwari - $150',
        price: 150,
    },
    {
        original: '/assets/horusis.png',
        thumbnail: '/assets/horusis_thumb.png',
        description: 'Horusis - $100',
        price: 100,
    },
    {
        original: '/assets/linear_space.png',
        thumbnail: '/assets/linear_space_thumb.png',
        description: 'Linear Space - $175',
        price: 175,
    },
    {
        original: '/assets/purple_shiness.png',
        thumbnail: '/assets/purple_shiness_thumb.png',
        description: 'Purple Shiness - $80',
        price: 80,
    },
    {
        original: '/assets/sweet_home.png',
        thumbnail: '/assets/sweet_home_thumb.png',
        description: 'Sweet Home - $200',
        price: 200,
    },
    {
        original: '/assets/through_window.png',
        thumbnail: '/assets/through_window_thumb.png',
        description: 'Through Window - $130',
        price: 130,
    },
    {
        original: '/assets/unacknoledged_legion.png',
        thumbnail: '/assets/unacknoledged_legion_thumb.png',
        description: 'Unacknoledged Legion - $190', 
        price: 190,  
    },
    {
        original: '/assets/waterfall.png',
        thumbnail: '/assets/waterfall_thumb.png',
        description: 'Waterfall - $90', 
        price: 90,
    },
    {
        original: '/assets/xangalicious.png',
        thumbnail: '/assets/xangalicious_thumb.png',
        description: 'Xangalicious - $210',
        price: 210,
    },
    {
        original: '/assets/zeldacell.png',
        thumbnail: '/assets/zeldacell_thumb.png',
        description: 'Zeldacell - $140',
        price: 140,
    }
]

function Gallery() {
    const [cart, setCart] = useState([]);

    const addToCart = (image) => {
        SetCart([...cart, image]);
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