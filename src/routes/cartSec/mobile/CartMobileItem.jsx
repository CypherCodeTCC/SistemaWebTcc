import { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";

import {
  ButtonAddMobile,
  ButtonExcluirMobile,
  CartItemsMobile,
  DescriptionMobile,
  ImageLivroMobile,
  NomeAutorMobile,
  NomeEditoraMobile,
  NomeLivroMobile,
  NomePrecoMobile,
  PrecoItemMobile,
} from "./cartMobileStyle";

export default function CartMobileItem(props) {
  const { id, name, price, image, author, genre, publishing_company } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  return (
    <>
      <CartItemsMobile>
        {image && <ImageLivroMobile src={image.url} />}
        <DescriptionMobile>
          <NomeEditoraMobile>{publishing_company.name}</NomeEditoraMobile>
          <NomeLivroMobile>{name}</NomeLivroMobile>
          <NomeAutorMobile>Autor: {author.name}</NomeAutorMobile>
          <NomeAutorMobile>Gênero: {genre.name}</NomeAutorMobile>
          <ButtonAddMobile onClick={() => addToCart(id)}>
            Adquirir
          </ButtonAddMobile>
          <NomeLivroMobile>Qtd: {cartItems[id]}</NomeLivroMobile>
        </DescriptionMobile>
        <PrecoItemMobile>
          <NomePrecoMobile>R${price.toFixed(2)}</NomePrecoMobile>
          <ButtonExcluirMobile onClick={() => removeFromCart(id)}>
            Diminuir
          </ButtonExcluirMobile>
        </PrecoItemMobile>
      </CartItemsMobile>
    </>
  );
}
