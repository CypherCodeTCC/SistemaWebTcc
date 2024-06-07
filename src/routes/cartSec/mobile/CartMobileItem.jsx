import { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";

import LivroPng from '../../../../public/azulDeitado.png'
import { ButtonAddMobile, ButtonExcluirMobile, CartItemsMobile, DescriptionMobile, ImageLivroMobile, NomeAutorMobile, NomeEditoraMobile, NomeLivroMobile, NomePrecoMobile, PrecoItemMobile } from "./cartMobileStyle";

export default function CartMobileItem(props) {
    const { id, name, price } = props.data;
    const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

    return(
        <>
            <CartItemsMobile>
                <ImageLivroMobile src={LivroPng} />
                <DescriptionMobile>
                    <NomeEditoraMobile>Editora Wish</NomeEditoraMobile>
                    <NomeLivroMobile>{name}</NomeLivroMobile>
                    <NomeAutorMobile>Autor: Juan</NomeAutorMobile>
                    <NomeAutorMobile>Gênero: Eduardo</NomeAutorMobile>
                    <ButtonAddMobile onClick={() => addToCart(id)}>Adquirir</ButtonAddMobile>
                    <NomeLivroMobile>Qtd: {cartItems[id]}</NomeLivroMobile>
                </DescriptionMobile>
                <PrecoItemMobile>
                    <NomePrecoMobile>R${price}</NomePrecoMobile>
                    <ButtonExcluirMobile onClick={() => removeFromCart(id)}>Excluir</ButtonExcluirMobile>
                </PrecoItemMobile>
            </CartItemsMobile>
        </>
    )
}