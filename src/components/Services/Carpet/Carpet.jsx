import React from 'react';
import styleCSS from './Carpet.module.css';
import Item from '../Item/Item';

const Carpet = () => {
    return (
        <section>
            <h2>Carpet/Flooring</h2>
            <div className={styleCSS.container}>
                <Item nameItem="Cover" imgName="images/1.jpg"/>
                <Item nameItem="never" imgName="images/2.jpg"/>
                <Item nameItem="kkk" imgName="images/3.jpg"/>
            </div>
        </section>
    );
}

export default Carpet;