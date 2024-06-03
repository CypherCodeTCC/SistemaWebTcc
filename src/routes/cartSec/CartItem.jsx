import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

import {
  Button,
  CartItems,
  CountHandler,
  Description,
  Input,
  NomeAutor,
  NomeLivro,
} from "./cartStyle";

export default function CartItem(props) {
  const { id, name, price } = props.data;
  const { addToCart, removeFromCart, updateCartItemCount, cartItems } =
    useContext(CartContext);

  return (
    <>
      <CartItems>
        <Description>
          <NomeAutor>{name}</NomeAutor>
          <NomeLivro>R$ {price}</NomeLivro>
          <CountHandler>
            <Button onClick={() => removeFromCart(id)}> - </Button>
            <Input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <Button onClick={() => addToCart(id)}> + </Button>
          </CountHandler>
        </Description>
      </CartItems>
    </>
  );
}
