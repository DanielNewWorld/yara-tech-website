import React from 'react';
import styleCSS from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styleCSS.aboutUs} id="about">
            <div>
                <h2>ABOUT US!</h2>
                <article>My leather furniture is characterized by exquisite style and high quality materials, providing a luxurious look and durability. It offers a comfortable seat and easy care, while emphasizing the individuality of customers with its unique designs and finishes. It is the ideal choice for those who appreciate style, comfort and excellent quality.</article>
            </div>
        </div >
    );
};

export default AboutUs;