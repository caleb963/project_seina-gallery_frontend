import React, {useState} from 'react';``
import 'react-image-gallery/styles/css/image-gallery.css';
import "../styles/Gallery.css";

const images = [
    {
        original : '/assets/colorful_darkness.png',
        thumbnail: '/assets/colorful_darkness.png',
        description: ' Colorful Darkness',
        price: 65,
    },
    {
        original: '/assets/dmitrp.png',
        thumbnail: '/assets/dmitrp.png',
        description: 'DMTrip',
        price: 400,
    },
    {
        original: '/assets/fuel_spectrum.png',
        thumbnail: '/assets/fuel_spectrum.png',
        description: 'Fuel Spectrum',
        price: 75,
    },
    {
        original: '/assets/hikuriwari.png',
        thumbnail: '/assets/hikuriwari.png',
        description: 'Hikuriwari',
        price: 250,
    },
    {
        original: '/assets/horusis.png',
        thumbnail: '/assets/horusis.png',
        description: 'Horusis',
        price: 100,
    },
    {
        original: '/assets/linear_space.png',
        thumbnail: '/assets/linear_space.png',
        description: 'Linear Space',
        price: 170,
    },
    {
        original: '/assets/purple_shiness.png',
        thumbnail: '/assets/purple_shiness.png',
        description: 'Purple Shiness',
        price: 80,  
    },
    {
        original: '/assets/mirror.png',
        thumbnail: '/assets/mirror.png',
        description: 'Mirror',
        price: 200,
    },
    {
        original: '/assets/through__window.png',
        thumbnail: '/assets/through__window.png',
        description: 'Through Window',
        price: 130,
    },
    {
        original: '/assets/unacknoledged.png',
        thumbnail: '/assets/unacknoledged.png',
        description: 'Unacknowledged', 
        price: 190,  
    },
    {
        original: '/assets/waterfall.png',
        thumbnail: '/assets/waterfall.png',
        description: 'Waterfall', 
        price: 90,
    },
    {
        original: '/assets/pink_lights.png',
        thumbnail: '/assets/pink_lights.png',
        description: 'Pink Lights',
        price: 210,
    },
    {
        original: '/assets/zeldacell.png',
        thumbnail: '/assets/zeldacell.png',
        description: 'ZeldaCell',
        price: 140,
    }
]

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [cart, setCart] = useState([]);
    
    const openModal =(image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
     
   

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
            {selectedImage && (
            <div className="gallery__modal">
                <div className="gallery__modal-content">
                    <img src={selectedImage.original} alt="gallery__modal-image"/>
                    <p  className="gallery__modal-price">${selectedImage.description}</p>
                    <p className="gallery__modal-price">${selectedImage.price}</p>
                    <button className="gallery__modal-close" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
            )}
        </section>
    );
}

export default Gallery;