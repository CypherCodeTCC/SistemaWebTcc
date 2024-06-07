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

function calculateTax(totalAmount, taxRate) {
  const taxDecimal = taxRate / 100;
  const taxAmount = totalAmount * taxDecimal;

  return taxAmount;
}

export default function CartMobile() {
  const [items, setItems] = useState([]);
  const { cartItems, getTotalCartAmount } = useContext(CartContext);

  const totalAmount = getTotalCartAmount();
  const taxRate = 5;
  const taxAmount = calculateTax(totalAmount, taxRate);

  const shippingCost = 4.5;

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
      {totalAmount > 0 ? (
        <Container>
          <FinalizePurchase>
            <FinalizePurchaseBoxMobile>
              <ImageMobile src={TruckPng} alt="Imagem de Caminhão" />
              <SubTitlePurchaseBoxMobile>
                Finalize suas compras
              </SubTitlePurchaseBoxMobile>
            </FinalizePurchaseBoxMobile>
            <Button>Finalizar Compras</Button>
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
              <SubTitleMobile>Impostos</SubTitleMobile>
              <PrecosMobile>R${taxAmount.toFixed(2)}</PrecosMobile>
              <SubTitleMobile>Frete</SubTitleMobile>
              <PrecosMobile>R${shippingCost.toFixed(2)}</PrecosMobile>
              <LineMobile></LineMobile>
              <SubTitleMobile>Total:</SubTitleMobile>
              <PrecoTotalMobile>
                R${(totalAmount + taxAmount + shippingCost).toFixed(2)}
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
