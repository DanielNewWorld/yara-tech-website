import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styleCSS from './MyCarousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

const MyCarousel = () => {
    return (
        <Carousel showArrows={true}>
            <div>
                <img src={image1} alt="1" className={styleCSS.imgItem}/>
                <p className="legend">Описание 1</p>
            </div>
            <div>
                <img src={image2} alt="2" />
                <p className="legend">Описание 2</p>
            </div>
            <div>
                <img src={image3} alt="3" />
                <p className="legend">Описание 2</p>
            </div>
            <div>
                <img src={image4} alt="4" />
                <p className="legend">Описание 2</p>
            </div>
            <div>
                <img src={image5} alt="5" />
                <p className="legend">Описание 2</p>
            </div>
        </Carousel>
    );
};

export default MyCarousel;