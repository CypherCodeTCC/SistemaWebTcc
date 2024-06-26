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
        const books = res.data;

        const booksWithDiscount = books.map((book) => {
          if(book.genre && book.genre.name === "Dev. Pessoal"){
            const novoPreco = book.price * 0.5;
            return {
              ...book,
              discount: 1,
              price: novoPreco,
            };
          }
          return book;
        });

        setItems(booksWithDiscount);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRoutes = (route, state = {}) => {
    scrollToTop();
    navigate(route, { state })
  }


  const handleClick = async () => {
    // Verifica se o usuário está logado
    
    if(userGoogle && !userId){
      toast.error("É necessário fazer o registro antes de finalizar a compra!", {
        closeOnClick: true,
      });
      handleRoutes("/register");
      return;
    }
    else if (!userId){
      toast.error("É necessário logar antes de finalizar a compra!", {
        closeOnClick: true,
      });
      handleRoutes("/login");
      return;
    }
    else{
      handleRoutes("/finalizarcompra", { itemsOnCart, cartItems, totalAmount });
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
              <ButtonCart onClick={handleClick}>Continuar</ButtonCart>
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
