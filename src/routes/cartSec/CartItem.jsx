import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

import {
  CartItems,
  CountHandler,
  Description,
  Input,
  Title,
  NomeAutor,
  NomeLivro,
} from "./cartStyle";

export default function CartItem(props) {
  const { id, name, price } = props.data;
  const { addToCart, removeFromCart, updateCartItemCount, cartItems } =
    useContext(CartContext);

  function handleChanged() {
    let value = document.getElementById("number");
    if (value++) addToCart(id);
    else removeFromCart(id);
  }

  return (
    <>
      <CartItems>
        <Description>
          <NomeAutor>{name}</NomeAutor>
          <NomeLivro>R$ {price}</NomeLivro>
          <CountHandler>
            <Input
              type="number"
              id="number"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              onInput={handleChanged}
            />
          </CountHandler>
          <NomeLivro>R$ 440.00</NomeLivro>
        </Description>
      </CartItems>
    </>
  );
}
