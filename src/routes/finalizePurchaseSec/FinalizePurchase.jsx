import { useEffect, useState } from "react";
import {
  BookInfo,
  Button,
  Checkout,
  Container,
  ContainerAddress,
  ContainerButton,
  ContainerPurchase,
  Input,
  Items,
  SubTitleItems,
  Title,
} from "./finalizePurchaseStyle";
import { Line, PrecoTotal, SubTitle } from "../../routes/cartSec/cartStyle";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Infos } from "../cartSec/cartStyle";
import { Cancelar } from "../profileSec/profileStyle";

export default function FinalizePurchase() {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemsOnCart, cartItems, totalAmount } = location.state || [];
  const userData = localStorage.getItem("user") || {};

  const [user, setUser] = useState({
    Nome: "",
    Email: "",
    Telefone: "",
  });

  const [address, setAddress] = useState({
    Logradouro: "",
    Complemento: "",
    Cidade: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/client/${localStorage.getItem(
            "userId"
          )}`
        );
        const userEmail = res.data.Email
          ? res.data.Email
          : JSON.parse(userData).email;
        setUser({
          ...res.data,
          Email: userEmail,
        });
      } catch (err) {
        toast.error("Erro ao encontrar dados do usuário. Tente mais tarde.", {
          closeOnClick: true,
        });
        console.log("Erro ao encontrar dados do usuário.", err);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/client/address/${localStorage.getItem(
            "userId"
          )}`
        );
        setAddress(res.data);
      } catch (err) {
        toast.error(
          "Erro ao encontrar endereço do usuário. Tente mais tarde.",
          {
            closeOnClick: true,
          }
        );
        console.log("Erro ao encontrar endereço do usuário.", err);
      }
    };
    fetchAddress();
  }, []);

  const handleClick = async () => {
    const itemsToSend = itemsOnCart.map((item) => ({
      title: item.name,
      quantity: cartItems[item.id],
      unit_price: item.price,
    }));

    const payload = {
      user_id: localStorage.getItem("userId"),
      items: itemsToSend,
    };

    try {
      const response = await axios.post(
        "https://liber-payments-api-bb6000485904.herokuapp.com/payments",
        payload
      );
      console.log("Resposta do MercadoPago:", response.data.link_to_payment);
      window.open(response.data.link_to_payment, "_blank");
      toast.success("Realize o pagamento do(s) produto(s)!", {
        closeOnClick: true,
      });
      navigate("/meuspagamentos");
    } catch (err) {
      toast.error("Erro ao concluir pedido. Tente novamente mais tarde.", {
        closeOnClick: true,
      });
      console.log("Erro ao enviar dados para o MercadoPago.", err);
    }
  };

  return (
    <>
      <Container>
        <Title>Detalhes da Compra</Title>
        <ContainerAddress>
          <SubTitleItems>Nome Completo*</SubTitleItems>
          <Input type="text" value={user.Nome} readOnly />
          <SubTitleItems>Endereço*</SubTitleItems>
          <Input type="text" value={address.Logradouro} readOnly />
          <SubTitleItems>Complemento</SubTitleItems>
          <Input type="text" value={address.Complemento} readOnly />
          <SubTitleItems>Cidade*</SubTitleItems>
          <Input type="text" value={address.Cidade} readOnly />
          <SubTitleItems>Telefone*</SubTitleItems>
          <Input mask="00000-0000" type="text" value={user.Telefone} readOnly />
          <SubTitleItems>Endereço de e-mail*</SubTitleItems>
          <Input type="text" value={user.Email} readOnly />
        </ContainerAddress>
        <ContainerPurchase>
          {itemsOnCart.map((itemOnCart) => (
            <Items key={itemOnCart.id}>
              <BookInfo>
                {itemOnCart.image && <img src={itemOnCart.image.url} />}
                <SubTitleItems>{itemOnCart.name}</SubTitleItems>
              </BookInfo>
              <SubTitleItems>
                R${(itemOnCart.price * cartItems[itemOnCart.id]).toFixed(2)}
              </SubTitleItems>
            </Items>
          ))}
          <Checkout>
            <Infos>
              <SubTitle>Preço Total</SubTitle>
              <PrecoTotal>R${totalAmount.toFixed(2)}</PrecoTotal>
              <Line></Line>
              <SubTitle>Frete</SubTitle>
              <PrecoTotal>Grátis</PrecoTotal>
              <Line></Line>
              <SubTitle>Total</SubTitle>
              <PrecoTotal>R${totalAmount.toFixed(2)}</PrecoTotal>
            </Infos>
            <ContainerButton>
              <Button onClick={handleClick}>Finalizar Compra</Button>
              <Cancelar onClick={() => navigate("/cart")}>Voltar</Cancelar>
            </ContainerButton>
          </Checkout>
        </ContainerPurchase>
      </Container>
    </>
  );
}
