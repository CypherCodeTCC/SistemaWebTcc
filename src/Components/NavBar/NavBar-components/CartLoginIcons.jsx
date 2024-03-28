// CartLoginIcons.jsx
import React from 'react';
import CartIcon from '../../../Images/Svg/carrinho.svg';
import HumanIcon from '../../../Images/Svg/login.svg';

function CartLoginIcons() {
    return (
        <div className="carrinho-logar desktop">
            <div className="icones">
                     <img src={CartIcon} alt="Ícone de busca" />
                     <img src={HumanIcon} alt="Ícone de busca" />
            </div>
        </div>
    );
}

export default CartLoginIcons;
