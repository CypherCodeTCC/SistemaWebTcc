// CartLoginIcons.jsx
import React from "react";
import CartIcon from "../../../Images/Svg/carrinho.svg";
import SearchIcon from "../../../Images/Svg/search.svg";

function CartLoginIcons() {
    return (
        <div className="carrinho-logar desktop">
            <div className="icones">
                <img src={SearchIcon} alt="Ícone de busca" />
                <img src={CartIcon} alt="Ícone de Carrinho" />
            </div>
        </div>
    );
}

export default CartLoginIcons;
