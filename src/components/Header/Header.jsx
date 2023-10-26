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
                                    <NavLink to="/services"
                                             className={styleCSS.menuNavlink}
                                    >Services</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/howwework"
                                             className={styleCSS.menuNavlink}
                                    >How we work</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/about"
                                             className={styleCSS.menuNavlink}
                                    >About Us</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/blog"
                                             className={styleCSS.menuNavlink}
                                    >Blog</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/faq"
                                             className={styleCSS.menuNavlink}
                                    >FAQs</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}></div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/signin"
                                             className={styleCSS.menuNavlink}
                                    >Sign in</NavLink>
                                </div>
                                <div className={styleCSS.menuItem}>
                                    <NavLink to="/contact"
                                             className={styleCSS.menuNavlinkMark}
                                    >Contact Us</NavLink>
                                </div>
                            </nav>
                        )}
                </div>
            </div>
        </header>
    );
}

export default Header;