import React from 'react';
import styleCSS from './NavServices.module.css';
import { NavLink } from 'react-router-dom';

const NavServices = () => {

    return (
        <div className={styleCSS.navServices}>
            <div className={styleCSS.text}>Services Provided</div>
            <nav className={styleCSS.menu}>
                <div><NavLink to="/marineupholstery" activeClassName={styleCSS.activeLink}>Marine Upholstery</NavLink></div>
                <div><NavLink to="/carpet" activeClassName={styleCSS.activeLink}>Carpet/Flooring</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Embroidery</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Interior Design and Decorating</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Boat Covers</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Bimini Tops</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Custom Canvas and Full Enclosures</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Custom Princess Pads/Sunpads</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Custom Ottomans</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Detailing</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Indoor and Outdoor Furniture</NavLink></div>
                <div><NavLink to="/aa" activeClassName={styleCSS.activeLink}>Automotive Renovations</NavLink></div>
            </nav>
        </div>
    );
};

export default NavServices;