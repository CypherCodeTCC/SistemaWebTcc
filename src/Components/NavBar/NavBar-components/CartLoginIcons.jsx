import React, { useState } from "react";
import CartIcon from "../../../../public/carrinho.svg";
import SearchIcon from "../../../../public/search.svg";

function PopupCarrinhoVazio({ setIsPopupOpen }) {
    const handleFechar = () => {
        setIsPopupOpen(false);
        setMainHeadingZIndexBasedOnState(false);
    };

    return (
        <div class="modal-overlay" onClick={handleFechar}>
            <div class="modal">
                <div class="modal-content">
                    <i class="material-icons error-icon">error</i>
                    <p>Carrinho vazio</p>
                </div>
            </div>
        </div>
    );
}
function PopupPesquisar() {
    return (
        <>
        
        </>
    )
}

function setMainHeadingZIndexBasedOnState(isMenuOpen) {
    const mainHeadings = document.querySelectorAll('.mainHeading');
    mainHeadings.forEach(mainHeading => {
        mainHeading.style.zIndex = isMenuOpen ? -1 : 1;
    });
}

function CartLoginIcons() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCartIconClick = () => {
        setIsPopupOpen(true);
        setMainHeadingZIndexBasedOnState(true);
    };

    return (
        <div className="carrinho-logar desktop">
            {isPopupOpen && <PopupCarrinhoVazio setIsPopupOpen={setIsPopupOpen} />}
            <div className="icones">
                <img src={SearchIcon} alt="Ícone de busca" />
                <img src={CartIcon} alt="Ícone de Carrinho" onClick={handleCartIconClick} />
            </div>
        </div>
    );
}

export default CartLoginIcons;
