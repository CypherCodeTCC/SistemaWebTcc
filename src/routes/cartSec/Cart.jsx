import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart/CartContext";
import axios from "axios";
import CartItem from "./CartItem";
import CartMobile from "./mobile/CartMobile";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const [ itemsOnCart, setItemsOnCart ] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const userGoogle = localStorage.getItem("uId");

  const totalAmount = getTotalCartAmount();

  const width = useWindowWidth();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("https://node-routes-mysql.vercel.app/book");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleClick = async () => {
    // Verifica se o usuário está logado
    
    if(userGoogle && !userId){
      toast.error("É necessário fazer o registro antes de finalizar a compra!", {
        closeOnClick: true,
      });
      navigate("/register");
      return;
    }
    else if (!userId){
      toast.error("É necessário logar antes de finalizar a compra!", {
        closeOnClick: true,
      });
      navigate("/login");
      return;
    }

    const itemsToSend = itemsOnCart.map((item) => ({
      title: item.name,
      quantity: cartItems[item.id],
      unit_price: item.price,
    }));

    const payload = {
      user_id: localStorage.getItem("userId"),
      items: itemsToSend,
    };

    try{
      const response = await axios.post("https://liber-payments-api-bb6000485904.herokuapp.com/payments", payload);
      console.log("Resposta do MercadoPago:", response.data.link_to_payment);
      window.open(response.data.link_to_payment, '_blank');
    } 
    catch(err) {
      toast.error("Erro ao concluir pedido. Tente novamente mais tarde.", {
        closeOnClick: true,
      });
      console.log("Erro ao enviar dados para o MercadoPago.", err);
    }
  }

  useEffect(() => {
    setItemsOnCart(items.filter((item) => cartItems[item.id] > 0));
  }, [items, cartItems]);

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
                <PrecoTotal>R${totalAmount.toFixed(2)}</PrecoTotal>
                <Line></Line>
                <SubTitle>Frete:</SubTitle>
                <PrecoTotal>Grátis</PrecoTotal>
                <Line></Line>
                <SubTitle>Total:</SubTitle>
                <PrecoTotal>R${totalAmount.toFixed(2)}</PrecoTotal>
              </Infos>
              <ButtonCart onClick={handleClick}>Finalizar Compra</ButtonCart>
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
