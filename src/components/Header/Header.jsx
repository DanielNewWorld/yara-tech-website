import React from 'react';
import styleCSS from './Header.module.css';
import logo from '../../images/images.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    // const scrollToSection = (id) => {
    //     const section = document.getElementById(id);
    //     section.scrollIntoView({behavior: 'smooth'});
    // };

    return (
        <header className={styleCSS.header}>
            <div className={styleCSS.gridHeader}>
                {/*<div>*/}
                {/*    {props.data.isMobile ? (*/}
                {/*        <Menu className={styleCSS.menuSandwich}/>*/}
                {/*    ) : (null)}*/}
                {/*</div>*/}

                <div>
                    {props.data.isMobile ? (null) :
                        (
                            <nav className={styleCSS.menuLine}>
                                <div><NavLink to="/">
                                    <img alt="" src={logo} className={styleCSS.logo}/>
                                </NavLink></div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/services" activeClassName={styleCSS.activeLink}>Services</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/howwework" activeClassName={styleCSS.activeLink}>How we work</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/about" activeClassName={styleCSS.activeLink}>About Us</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/contact" activeClassName={styleCSS.activeLink}>Contact Us</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/blog" activeClassName={styleCSS.activeLink}>Blog</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/faq" activeClassName={styleCSS.activeLink}>FAQs</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/signin" activeClassName={styleCSS.activeLink}>Sign in</NavLink>
                                </div>
                            </nav>
                        )}
                </div>
            </div>

        </header>
    );
}

export default Header;

/* <img src="images/background_0.jpg" className={styleCSS.imageHeader} />

<div className={styleCSS.textHeader}>
    <h1>{state.name}</h1>
</div> */