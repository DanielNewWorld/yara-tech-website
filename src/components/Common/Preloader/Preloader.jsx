import React from "react";
import preloader from '../../../images/spinner.svg';
import styleCSS from './Preloader.module.css';

let Preloader = (props) => {
return <div><img src={preloader} className={styleCSS.preloader}/></div>;
}

export default Preloader;