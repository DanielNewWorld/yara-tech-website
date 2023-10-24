import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

const Slideshow = () => {
    const images = [
        {
            url: image1,
            text: 'Some text for image 1'
        },
        {
            url: image2,
            text: 'Some text for image 2'
        },
        // Add more images here with respective text
    ];

    const properties = {
        duration: 3000, // 3 seconds
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    };

    return (
        <div className="slide-container">
            <Slide {...properties}>
                {images.map((image, index) => (
                    <div key={index} className="each-slide">
                        <div style={{
                            backgroundImage: `url(${image.url})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '50vh',
                            width: '50vw',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center' }}>
                            <span>{image.text}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slideshow;
