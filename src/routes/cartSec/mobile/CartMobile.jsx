import { useContext, useEffect, useState } from "react";
import CartContext from "../../../context/cart/CartContext";
import axios from "axios";
import CartMobileItem from "./CartMobileItem";
import {
  Button,
  Container,
  ContainerCheckoutMobile,
  FinalizePurchase,
  FinalizePurchaseBoxMobile,
  ImageMobile,
  ImagePaymentMobile,
  LineMobile,
  PaymentMobile,
  PrecoTotalMobile,
  PrecosMobile,
  PurchaseInformationMobile,
  SubTitleMobile,
  SubTitlePurchaseBoxMobile,
} from "./cartMobileStyle";

import TruckPng from "../../../../public/truck.png";
import VisaPng from "../../../../public/visa.png";
import AmazonPng from "../../../../public/amazon.png";
import MastercardPng from "../../../../public/mastercard.png";
import GooglePayPng from "../../../../public/googlePay.png";
import ApplePayPng from "../../../../public/applePay.png";
import PayPalPng from "../../../../public/paypal.png";
import { CartEmpty, Title } from "../cartStyle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CartMobile() {
  const [items, setItems] = useState([]);
  const { cartItems, getTotalCartAmount } = useContext(CartContext);
  const [ itemsOnCart, setItemsOnCart ] = useState([]);

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const userGoogle = localStorage.getItem("uId");

  const totalAmount = getTotalCartAmount();

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
        })
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

  return (
    <>
      {totalAmount > 0 ? (
        <Container>
          <FinalizePurchase>
            <FinalizePurchaseBoxMobile>
              <ImageMobile src={TruckPng} alt="Imagem de Caminhão" />
              <SubTitlePurchaseBoxMobile>
                Finalize suas compras
              </SubTitlePurchaseBoxMobile>
            </FinalizePurchaseBoxMobile>
            <Button onClick={handleClick}>Finalizar Compras</Button>
          </FinalizePurchase>
          {items.map((item) => {
            if (cartItems[item.id] > 0)
              return <CartMobileItem key={item.id} data={item} />;
          })}

          <ContainerCheckoutMobile>
            <PurchaseInformationMobile>
              <LineMobile></LineMobile>
              <SubTitleMobile>Subtotal:</SubTitleMobile>
              <PrecosMobile>R${totalAmount.toFixed(2)}</PrecosMobile>
              <SubTitleMobile>Frete</SubTitleMobile>
              <PrecosMobile>Grátis</PrecosMobile>
              <LineMobile></LineMobile>
              <SubTitleMobile>Total:</SubTitleMobile>
              <PrecoTotalMobile>
                R${totalAmount.toFixed(2)}
              </PrecoTotalMobile>
            </PurchaseInformationMobile>
            <PaymentMobile>
              <ImagePaymentMobile src={VisaPng} alt="Visa" />
              <ImagePaymentMobile src={AmazonPng} alt="Amazon" />
              <ImagePaymentMobile src={MastercardPng} alt="Mastercard" />
              <ImagePaymentMobile src={GooglePayPng} alt="Google Pay" />
              <ImagePaymentMobile src={ApplePayPng} alt="Apple Pay" />
              <ImagePaymentMobile src={PayPalPng} alt="PayPal" />
            </PaymentMobile>
          </ContainerCheckoutMobile>
        </Container>
      ) : (
        <CartEmpty>
          <Title>Seu carrinho está vazio!</Title>
        </CartEmpty>
      )}
    </>
  );
}
