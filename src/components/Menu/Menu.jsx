import React, { useState } from 'react';
import styleCSS from './Menu.module.css';
import menuImg from '../../images/menu.png';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={styleCSS.menuHeader}>
            <div className={styleCSS.menuIcon} onClick={toggleMenu}>
                <img src={menuImg} className={styleCSS.menuLogo} />
                <div className={styleCSS.menuLabel}><h3>MENU</h3></div>
                <div className={styleCSS.iconBar}></div>
                <div className={styleCSS.iconBar}></div>
                <div className={styleCSS.iconBar}></div>
            </div>
            {isMenuOpen && (
                <div className={styleCSS.dropdownContainer}>
                    <div className={styleCSS.dropdownMenu}>
                        <div className={styleCSS.itemMenu} onClick={() => scrollToSection('home')}>Home</div>
                        <div className={styleCSS.itemMenu} onClick={() => scrollToSection('services')}>Services</div>
                        <div className={styleCSS.itemMenu} onClick={() => scrollToSection('about')}>About Us</div>
                        <div className={styleCSS.itemMenu} onClick={() => scrollToSection('contact')}>Contact Us</div>
                    </div>
                </div>
            )}
            <div className={styleCSS.upPage}>
                <a href="#scroll-to-top">↑</a>
            </div>
        </nav>
    );
};

export default Menu;

/* <nav className={styleCSS.menuHeader}>
<div><a onClick={() => scrollToSection('home')}>HOME</a></div>
<div><a onClick={() => scrollToSection('services')}>SHOP</a></div>
<div><a onClick={() => scrollToSection('about')}>ABOUT US</a></div>
<div><a onClick={() => scrollToSection('contact')}>CONTACT</a></div>
</nav> */

//