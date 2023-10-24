import React, { useState, useEffect } from 'react';
import styleCSS from './ImageSlider.module.css';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

const ImageSlider = (props) => {

  const [currentImage, setCurrentImage] = useState(0);
  let image = image1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % props.data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [props.data.length]);

  switch (currentImage) {
    case 0:
      image = image1;
      break;
    case 1:
      image = image2;
      break;
    case 2:
      image = image3;
      break;
    case 3:
      image = image4;
      break;
    case 4:
      image = image5;
      break;
    default:
      image = image1;
  }

  return (
    <section className={styleCSS.gridServiceItem}>
    <div className={styleCSS.serviceItem}>
      {/*<img className={styleCSS.imgItem} src={props.data[currentImage].imgSrc} alt={`Image ${currentImage}`} />*/}
      <img className={styleCSS.imgItem} src={image} alt={`I ${currentImage}`} />
      <div className={styleCSS.desriptionItem}>
        <div className={styleCSS.desriptionContents}>
          <h2>
            {props.data[currentImage].description}
            {/*<button className={styleCSS.button} onClick={`mailto:${props.data.email}`}>CONTACT US</button>*/}
          </h2>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ImageSlider;