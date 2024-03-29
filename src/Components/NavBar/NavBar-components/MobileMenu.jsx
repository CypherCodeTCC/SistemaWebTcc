import React, { useState, useEffect } from 'react';
import '../css/mobilemenu.css';

// Função para buscar o mainHeading pela classe e setar o z-index para -1 quando o menu estiver aberto
function setMainHeadingZIndexBasedOnState(isMenuOpen) {
    const mainHeadings = document.querySelectorAll('.mainHeading');
    mainHeadings.forEach(mainHeading => {
        mainHeading.style.zIndex = isMenuOpen ? -1 : 1;
    });
}

// Componente para a tela ativada no clique
function ScreenOnClickMobile({ onClick }) {
    return (
        <div className="screen-on-click" onClick={onClick}>
            <h1>Tela ativada no clique</h1>
        </div>
    );
}

// Componente para o interior do menu mobile
function MobileMenuInterior() {
    return (
        <section className='interior-menumobile'>
            <ul className="interior-menumobile-menu">
                <li className='li--menu'><a href="#" className='li--a--menu'>Home</a></li>
                <li className='li--menu'><a href="#" className='li--a--menu'>Categorias</a></li>
                <li className='li--menu'><a href="#" className='li--a--menu'>Ofertas</a></li>
                <li className='li--menu'><a href="#" className='li--a--menu'>Eventos</a></li>
                <div className='botoes-interior-menumobile'>
                    <li className="li-botoes-menumobile"><a href="/" className="a--li--menumobile">Entrar</a></li>
                </div>
            </ul>
        </section>
    )
}

// Componente principal para o menu mobile
function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para lidar com o clique no ícone do menu
    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Efeito para atualizar o estado e adicionar/remover classe do body quando o menu é aberto/fechado
    useEffect(() => {
        setMainHeadingZIndexBasedOnState(isMenuOpen);
        document.body.classList.toggle('menu-open', isMenuOpen);

        // Remover classe do body ao desmontar o componente
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
                <MobileMenuInterior />
            </div>
        </div>
    );
}

export default MobileMenu;
