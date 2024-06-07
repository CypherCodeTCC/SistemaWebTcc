import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart/CartContext";
import axios from "axios";
import CartItem from "./CartItem";
import CartMobile from "./mobile/CartMobile";
import useWindowWidth from "../../hooks/useWindowWidth";
import {
  ButtonCart,
  CartEmpty,
  ContainerTitle,
  ContainerCheckout,
  Checkout,
  Container,
  Description,
  PrecoTotal,
  SubTitle,
  Title,
  TitleDescription,
  Infos,
  Line,
} from "./cartStyle";

export default function Cart() {
  const [items, setItems] = useState([]);
  const { cartItems, getTotalCartAmount } = useContext(CartContext);

  const totalAmount = getTotalCartAmount();

  const width = useWindowWidth();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8081/book");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  if (width < 1024)
    return <CartMobile />

  return (
    <>
      {totalAmount > 0 ? (
        <Container>
          <ContainerTitle>
            <Description>
              <TitleDescription>Produto</TitleDescription>
              <TitleDescription>Preço</TitleDescription>
              <TitleDescription>Quantidade</TitleDescription>
              <TitleDescription>Subtotal</TitleDescription>
            </Description>
          </ContainerTitle>
          {items.map((item) => {
            if (cartItems[item.id] > 0)
              return <CartItem key={item.id} data={item} />;
          })}

          <ContainerCheckout>
            <Checkout>
              <Title>Total da Compra</Title>
              <Infos>
                <SubTitle>Subtotal:</SubTitle>
                <PrecoTotal>R${totalAmount}</PrecoTotal>
                <Line></Line>
                <SubTitle>Frete:</SubTitle>
                <PrecoTotal>Grátis</PrecoTotal>
                <Line></Line>
                <SubTitle>Total:</SubTitle>
                <PrecoTotal>R${totalAmount}</PrecoTotal>
              </Infos>
              <ButtonCart>Finalizar Compra</ButtonCart>
            </Checkout>
          </ContainerCheckout>
        </Container>
      ) : (
        <CartEmpty>
          <Title>Seu carrinho está vazio!</Title>
        </CartEmpty>
      )}
    </>
  );
}
