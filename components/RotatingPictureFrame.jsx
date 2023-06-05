import React, { useState, useEffect } from 'react';

export default function RotatingPictureFrame({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [images]);

    return (
        <div className="rotating-picture-frame">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="Rotating Image"
                    className={index === currentIndex ? 'active' : ''}
                />
            ))}
        </div>
    );
};