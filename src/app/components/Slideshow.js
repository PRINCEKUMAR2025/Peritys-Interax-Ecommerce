// e-commerce-react/src/app/components/Slideshow.js
import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="relative w-full h-80 overflow-hidden"> {/* Increased height */}
            <div className="absolute inset-0 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;