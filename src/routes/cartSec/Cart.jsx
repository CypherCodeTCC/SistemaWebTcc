import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart/CartContext";
import axios from "axios";
import CartItem from "./CartItem";
import {
  ButtonCart,
  CartEmpty,
  Checkout,
  Container,
  SubTitle,
  Title,
} from "./cartStyle";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [items, setItems] = useState([]);
  const { cartItems, getTotalCartAmount } = useContext(CartContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

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

  return (
    <>
      <Container>
        <Title>Seus itens no carrinho!</Title>
        {items.map((item) => {
          if (cartItems[item.id] > 0)
            return <CartItem key={item.id} data={item} />;
        })}

        {totalAmount > 0 ? (
          <Checkout>
            <SubTitle>Subtotal: R$ {totalAmount}</SubTitle>
            <ButtonCart onClick={() => navigate("/")}>
              Continue Comprando
            </ButtonCart>
            <ButtonCart>Checkout</ButtonCart>
          </Checkout>
        ) : (
          <CartEmpty>
            <Title>Seu carrinho está vazio!</Title>
          </CartEmpty>
        )}
      </Container>
    </>
  );
}
