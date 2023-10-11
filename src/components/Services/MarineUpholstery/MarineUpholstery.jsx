import React from 'react';
import styleCSS from './MarineUpholstery.module.css';
import Item from '../Item/Item';

const MarineUpholstery = (props) => {

    let elements = props.data.itemProductData.map(item =>
        <Item nameItem={item.nameItem} imgName={"images/" + item.id + ".jpg"} />
    );

    return (
        <section>
            <h2>Marine Upholstery</h2>
            <div className={styleCSS.container}>
                {elements}
            </div>
        </section>
    );
}

export default MarineUpholstery;