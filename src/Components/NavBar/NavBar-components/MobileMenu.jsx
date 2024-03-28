import React, { useState } from 'react';
import '../css/mobilemenu.css';

function FullScreen({ isOpen, onClose }) {
    return (
        <div className={`fullscreen-container ${isOpen ? 'open' : ''}`}>
            <div className="overlay" onClick={onClose}></div>
            <div className="menu-content">
                <nav>
                    <ul className="mcd-menu">
                        <li key="home">
                            <a href="javascript:void(0)">
                                <i className="material-icons">home</i>
                                <strong>Início</strong>
                                <small>Vá para o início</small>
                            </a>
                        </li>
                        <li key="categorias">
                            <a href="javascript:void(0)" className="active">
                                <i className="material-icons">format_list_bulleted</i>
                                <strong>Categorias</strong>
                                <small>Explore o catálogo</small>
                            </a>
                        </li>
                        <li key="eventos">
                            <a href="javascript:void(0)">
                                <i className="material-icons">event</i>
                                <strong>Eventos</strong>
                                <small>Eventos limitados</small>
                            </a>
                        </li>
                        <li key="ofertas">
                            <a href="javascript:void(0)">
                                <i className="material-icons">local_offer</i>
                                <strong>Ofertas</strong>
                                <small>Promoções exclusivas</small>
                            </a>
                        </li>
                        <li key="sobre">
                            <a href="javascript:void(0)">
                                <i className="material-icons">public</i>
                                <strong>Sobre Nós</strong>
                            </a>
                        </li>
                        <li key="trabalhe">
                            <a href="javascript:void(0)">
                                <i className="material-icons">emoji_events</i>
                                <strong>Trabalhe Conosco</strong>
                            </a>
                        </li>
                        <li>
                            <a className="search">
                                <input type="text" placeholder='Pesquisar...' />
                                <button><i className="material-icons">search</i></button>
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className="close-btn" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}

function HamburguerMenu({ onClick }) {
    return (
        <a href="javascript:void(0)" className="menu example2" onClick={onClick}><span></span></a>
    )
}

function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <div>
            <HamburguerMenu onClick={toggleMenu} />
            <FullScreen isOpen={menuOpen} onClose={toggleMenu} />
        </div>
    );
}

export default MobileMenu;
