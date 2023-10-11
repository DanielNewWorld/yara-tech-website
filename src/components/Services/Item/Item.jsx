import React from 'react';
import styleCSS from './Item.module.css';

const Item = (props) => {
    
    return (
        <div className={styleCSS.item}>
            <img src={props.imgName} />
            <h3>{props.nameItem}</h3>
        </div>
    );
}

export default Item;