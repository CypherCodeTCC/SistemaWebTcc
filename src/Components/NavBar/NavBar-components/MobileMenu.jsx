import React, { useState, useEffect } from 'react';
import '../css/mobilemenu.css';

function setMainHeadingZIndexBasedOnState(isMenuOpen) {
    const mainHeadings = document.querySelectorAll('.mainHeading');
    mainHeadings.forEach(mainHeading => {
        mainHeading.style.zIndex = isMenuOpen ? -1 : 1;
    });
}

function ScreenOnClickMobile({ onClick }) {
    return (
        <div className="screen-on-click" onClick={onClick}>
            <h1>Tela ativada no clique</h1>
        </div>
    );
}

function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setMainHeadingZIndexBasedOnState(isMenuOpen);

        document.body.classList.toggle('menu-open', isMenuOpen);

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    return (
        <div className='mobile-mobile'>
            {isMenuOpen && <ScreenOnClickMobile onClick={handleClick} />}
            <div className={`wrapper-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleClick}>
                <div className="line-menu half start"></div>
                <div className="line-menu"></div>
                <div className="line-menu half end"></div>
            </div>
            <div className={`fullscreen-menu ${isMenuOpen ? 'open' : ''}`}>
                <h1>texto</h1>
            </div>
        </div>
    );
}

export default MobileMenu;
