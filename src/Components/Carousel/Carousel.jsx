import React, { useState, useEffect } from 'react';
import './Carousel.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img1B from '../../assets/img1-b.png'; // Dark mode image
import img2B from '../../assets/img2-b.png'; // Dark mode image
import img3B from '../../assets/img3-b.png'; // Dark mode image

const Carousel = ({ theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const images = theme === 'dark' ? [img1B, img2B, img3B] : [img1, img2, img3];
    const texts = [
        {
            part1: 'Grow Up',
            part2: 'Your business',
            part3: 'With Us',
        },
        {
            part1: 'Own By',
            part2: 'You Driven',
            part3: 'By Us',
        },
        {
            part1: 'Reach Out',
            part2: 'Great Future',
            part3: 'With Us',
        },
    ];

    useEffect(() => {
        const animationDuration = 5000; // Animation duration in ms

        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, animationDuration);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        if (!isAnimating) {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className={`carousel ${theme}`}>
            <button
                className={`prev ${isAnimating ? 'disabled' : ''}`}
                onClick={prevSlide}
                disabled={isAnimating}
            >
                &#10094;
            </button>
            <div className="carousel-content">
                <img src={images[currentIndex]} alt="carousel slide" className="carousel-image" />
                <div className="carousel-text">
                    <div className={`text-part part1 ${theme}`}>{texts[currentIndex].part1}</div>
                    <div className={`text-part part2 ${theme}`}>{texts[currentIndex].part2}</div>
                    <div className={`text-part part3 ${theme}`}>{texts[currentIndex].part3}</div>
                </div>
            </div>
            <button
                className={`next ${isAnimating ? 'disabled' : ''}`}
                onClick={nextSlide}
                disabled={isAnimating}
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
