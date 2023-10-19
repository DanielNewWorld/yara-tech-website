import React from 'react';
import styleCSS from './ImageContent.module.css';
import image1 from '../../images/functional-testing.png';
import image2 from '../../images/regression-testing.png';
import image3 from '../../images/performance-testing.png';
import image4 from '../../images/usability-testing.png';
import image5 from '../../images/5.jpg';


const ImageContent = () => {
    return (
        <div className={styleCSS.imagecontent}>
            <img className={styleCSS.imgItem} src={image1} alt='imagecontent' />
            <img className={styleCSS.imgItem} src={image2} alt='imagecontent' />
            <img className={styleCSS.imgItem} src={image3} alt='imagecontent' />
            <img className={styleCSS.imgItem} src={image4} alt='imagecontent' />
        </div>
    );
};

export default ImageContent;