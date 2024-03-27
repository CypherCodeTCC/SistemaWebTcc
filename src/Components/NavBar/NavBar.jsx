import { useState } from 'react';
import "./navBar.css";
import logo from '../Images/logotipo.png';

function FullScreenMenu() {
    const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);

    const toggleFullScreenMenu = () => {
        setIsFullScreenMenuOpen(!isFullScreenMenuOpen);
    };

    return (
        <>
            <section className="nav-mobile wrap" onClick={toggleFullScreenMenu}>
                <div className={`burger ${isFullScreenMenuOpen ? 'active' : ''}`}>
                    <div className="strip burger-strip-2">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>

            {isFullScreenMenuOpen && (
                <div id="fullscreen-menu" onClick={toggleFullScreenMenu}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Categorias</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Eventos</a></li>
                    </ul>
                </div>
            )}
        </>
    );
}

function Navbar() {
    return (
        <>
            <nav class="navbar">
                <div className="logo">
                    <img src={logo} alt="Logotipo da empresa" />
                </div>
                <div class="navbar-links desktop">
                    <ul class="lista">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Categorias</a></li>
                        <li><a href="/">Ofertas</a></li>
                        <li><a href="/">Eventos</a></li>
                    </ul>
                </div>
                <section class="navbar-search desktop">
                    <div class="custom-input">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                        <input class="input" type="text" placeholder="O que você deseja buscar" />
                    </div>
                </section>
                <div class="carrinho-logar desktop">
                    <div class="icones">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9H11.5585C12.2542 9 12.6021 9 12.864 9.18876C13.1258 9.37752 13.2358 9.70753 13.4558 10.3675L15 15" stroke="black" stroke-linecap="round"></path>
                            <path d="M35 35H15.7749C14.5086 35 13.8755 35 13.5762 34.5847C13.2769 34.1694 13.4771 33.5688 13.8775 32.3675L14.0883 31.7351C14.5283 30.4151 14.7483 29.755 15.2721 29.3775C15.7959 29 16.4916 29 17.883 29H29" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M30.6787 29H19.6376C18.3584 29 17.7188 29 17.2178 28.6697C16.7169 28.3394 16.4649 27.7515 15.961 26.5757L12.7922 19.1818C11.9827 17.2929 11.5779 16.3485 12.0225 15.6743C12.4672 15 13.4946 15 15.5496 15H35.8305C38.1295 15 39.279 15 39.7126 15.7471C40.1462 16.4942 39.5758 17.4923 38.4352 19.4884L34.1517 26.9846L34.1517 26.9846C33.5897 27.9679 33.3088 28.4596 32.8432 28.7298C32.3776 29 31.8113 29 30.6787 29Z" stroke="black" stroke-linecap="round"></path>
                            <circle cx="34" cy="40" r="2" fill="black"></circle>
                            <circle cx="18" cy="40" r="2" fill="black"></circle>
                        </svg>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#A4A4A4"></rect>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.7142 33.7143V34.9714C37.7142 36.4572 36.4571 37.7143 34.9714 37.7143H13.0285C11.5428 37.7143 10.2856 36.4572 10.2856 34.9714V33.7143C10.2856 30.4 14.1714 28.3429 17.8285 26.7429L18.1714 26.5714C18.4571 26.4571 18.7428 26.4571 19.0285 26.6286C20.5142 27.6 22.1714 28.1143 23.9428 28.1143C25.7142 28.1143 27.4285 27.5429 28.8571 26.6286C29.1428 26.4571 29.4285 26.4571 29.7142 26.5714L30.0571 26.7429C33.8285 28.3429 37.7142 30.3429 37.7142 33.7143ZM24 10.2856C27.7714 10.2856 30.8 13.6571 30.8 17.8285C30.8 22 27.7714 25.3714 24 25.3714C20.2285 25.3714 17.2 22 17.2 17.8285C17.2 13.6571 20.2285 10.2856 24 10.2856Z" fill="white"></path>
                        </svg>
                    </div>
                </div>
                {/*menu mobile */}
                <FullScreenMenu />
            </nav>

        </>
    )
}
export default Navbar;